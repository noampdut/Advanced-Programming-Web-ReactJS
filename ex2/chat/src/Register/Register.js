import './register.css';
import { useState } from "react";
import validationPassword from './validation';
import {insertNewUser,isExists} from '../DataBase/dataBase';
import {useNavigate} from 'react-router-dom';
import { getUserByUserName } from '../DataBase/dataBase';
import contacts from '../ChattingPage/Contacts/contacts';



function Register({setActiveUser}){
    const [formData, setFormData] = useState({userName: '', nickName: '', 
     password: '', validationPassword:''});

    const {userName, nickName, password, validationPassword} = formData;
    
    const onChange = e => {
        const files = e.target.files;
        if (files != undefined){
            const file = files[0];
            var fr = new FileReader();
            fr.onload = function () {
            //setFormData({...formData, ['picture']: fr.result});
        }
            //fr.readAsDataURL(file);
        }else{
            setFormData({...formData, [e.target.name]: e.target.value});
        }
        
    };
    
    const onSubmit = e => {
        e.preventDefault();
        if (checkForm(userName, nickName, password, validationPassword)){
            //insertNewUser(userName, nickName, picture, password);

            fetch('https://localhost:5001/api/Register?userName=' + userName + '&nickName=' + nickName + '&password=' + password,
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        userName: userName,
                        nickName: nickName,
                        pwd: password
                    })
                }).then(res => {
                    const contentType = res.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        res.json().then(data => {
                            setActiveUser(data);
                            navigate("/ChattingPage");
                        })
                    } else {
                        alert("UserName is already taken.");
                        document.getElementById('userName').value = "";
                        document.getElementById('nickName').value = "";
                        document.getElementById('password').value = "";
                        document.getElementById('confirmPassword').value = "";
                    }
                });


            //setActiveUser(getUserByUserName(userName));
 
           //for(var i=0; i< 5; i++) {
           //    contacts.pop();
           //}
           
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
             
             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                 <input type="password" className="form-control" onChange={onChange}
                 value={password} name="password" id="password"/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password:</label>
                 <input type="password" name="validationPassword" className="form-control" onChange={onChange}
                     value={validationPassword} id="confirmPassword" onKeyPress={handleKeypress}></input>
             </div>
             <button type="button" onClick={onSubmit} className="btn btn-light" >Register</button>
         </form>
     </div>  
 );

}


function checkForm(userName, nickName, password, confirmPassword) {
//if (isExists(userName)){
//    alert("Username is already taken, please choose another username");
//    return false;
//}
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
    //alert("Created new user");
    return true;
}

export default Register;