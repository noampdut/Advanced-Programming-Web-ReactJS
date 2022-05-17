import './register.css';
import { useState } from "react";
import validationPassword from './validation';
import {insertNewUser,isExists} from '../DataBase/dataBase';
import {useNavigate} from 'react-router-dom';
import { getUserByUserName } from '../DataBase/dataBase';
import contacts from '../ChattingPage/Contacts/contacts';



function Register({setActiveUser}){
    const [formData, setFormData] = useState({userName: '', nickName: '', 
    picture: '', password: '', validationPassword:''});

    const {userName, nickName, picture, password, validationPassword} = formData;
    
    const onChange = e => {
        const files = e.target.files;
        if (files != undefined){
            const file = files[0];
            var fr = new FileReader();
            fr.onload = function () {
            setFormData({...formData, ['picture']: fr.result});
        }
            fr.readAsDataURL(file);
        }else{
            setFormData({...formData, [e.target.name]: e.target.value});
        }
        
    };
    
    const onSubmit = e => {
        e.preventDefault();
        if (checkForm(userName, nickName, picture, password, validationPassword)){
            insertNewUser(userName, nickName, picture, password);
            setActiveUser(getUserByUserName(userName));
 
           for(var i=0; i< 5; i++) {
               contacts.pop();
           }
           navigate("/ChattingPage");
        }
    };

    const handleKeypress = e => {
        if (e.key === "Enter") {
            onsubmit(e);
        }
    };
    
    const navigate = useNavigate();
 return (
     <div className="register">
         <div className="title">
             Register
         </div>

         <form>
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
                 <input type="text" name="userName" value={userName} 
                 id="userName" className="form-control" onChange={onChange}/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Nickname:</label>
                 <input type="text" name="nickName" value={nickName}
                  id="nickName" className="form-control" onChange={onChange}/>
             </div>

             <div className="input-group mb-3">
                 <input type="file" name="picture" id="picture" 
                 className="form-control" accept=".jpg, .jpeg, .png" onChange={onChange}/>
             </div>

             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                 <input type="password" className="form-control" onChange={onChange}
                 value={password} name="password" id="password"/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password:</label>
                 <input type="password" name="validationPassword" className="form-control" onChange={onChange}
                 value={validationPassword} id="confirmPassword" onKeyPress={handleKeypress}/>
             </div>
             <button type="button" onClick={onSubmit} className="btn btn-light" >Register</button>
         </form>
     </div>  
 );

}


function checkForm(userName, nickName, picture, password, confirmPassword) {
if (isExists(userName)){
    alert("Username is already taken, please choose another username");
    return false;
}
if(userName.length == 0 || nickName.length==0 || password.length==0 || confirmPassword.length==0) {
 alert("Please fill all the fields");
 return false;
}

if(!validationPassword(password)) {
    return false;
}

if(confirmPassword != password) {
    alert("Invalid password verification.");
    return false;
}

    alert("Created new user");
    return true;
}

export default Register;