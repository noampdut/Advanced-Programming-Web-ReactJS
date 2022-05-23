import './login.css';
import {useNavigate} from 'react-router-dom';
import { userIdentification, getUserByUserName } from '../DataBase/dataBase';
import axios from 'axios';

function Login({ setActiveUser }) {

  
    const onsubmit = e => {
        e.preventDefault();
        fetch('https://localhost:5001/api/Login?userName=' + document.getElementById('userName').value + '&password=' + document.getElementById('exampleInputPassword1').value,
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    userName: document.getElementById('userName').value,
                    password: document.getElementById('exampleInputPassword1').value
                })
            }).then(res => {
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    res.json().then(data => {
                        setActiveUser(data);
                        navigate("/ChattingPage");
                    })
                } else {
                    alert("Wrong password or userName.");
                    document.getElementById('userName').value = "";
                    document.getElementById('exampleInputPassword1').value = "";
                }
            }); 
    };
        //if (res.ok) {
            //const data = res.json();
            //console.log(data);
           //     setActiveUser(data);
           //     navigate("/ChattingPage");
          //  }
      //  })
    //};
         
    
   
        //let user = document.getElementById('userName').value
        //if (userIdentification(user, document.getElementById('exampleInputPassword1').value)) {
          //  setActiveUser(getUserByUserName(user));
            //navigate("/ChattingPage");
        //}
    //};

    const handleKeypress = e => {
        if (e.key === "Enter") {
            onsubmit(e);
        }
    };
    
    const navigate = useNavigate();
    return(
    <div className="login">
    <div className="title">
        Login
    </div>
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
            <input type="name" id="userName"  className="form-control"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" className="form-control"  id="exampleInputPassword1" onKeyPress={handleKeypress} ></input>
        </div>
        <button type="button" className="btn btn-light" onClick={onsubmit} >login </button>
    </form> 
    <span> Not registered?
        <button type="button" className="btn btn-link" onClick={() => navigate("/Register")} >click here </button>
    <span>to register</span>
    </span>
    </div>
    );
};



export default Login;