import './PopupWindow.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function RateButton({activeUser}) {

    const onClick = e => {
        alert('https://localhost:5001/Rates/Index?user=' + activeUser);
        alert(activeUser);
        window.location.href = 'https://localhost:5001/Rates/Index/' + activeUser;
        
    }


    const navigate = useNavigate();
    return (
        <span>
            <button onClick={onClick} ><img width="30" className="rounded-circle" src="rate.jpg" /></button>
        </span>

    );
}

export default RateButton;