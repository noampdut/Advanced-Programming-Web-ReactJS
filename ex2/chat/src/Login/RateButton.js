import '../ChattingPage/Contacts/PopupWindow.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function RateButton() {

    const onClick = e => {
        window.location.href = 'https://localhost:5001/Rates/Index';
    }
    const navigate = useNavigate();
    return (
        <span>
            <button onClick={onClick} ><img width="30" className="rounded-circle" src="rate.jpg" /></button>
        </span>
    );
}

export default RateButton;