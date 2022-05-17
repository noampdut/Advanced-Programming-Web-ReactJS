import './input.css';
import {React} from 'react';

function Input(props) {
    
    const onClick = e =>{
        e.preventDefault();
        props.addMessage(document.getElementById("message").value);
        document.getElementById("message").value = "";
    };

    const handleKeypress = e => {
      if (e.key === "Enter") {
        onClick(e);
      }
    };

    return (
        <div className="input-group mb-0 myInput">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
            <ul className="dropdown-menu myDropDown">
                <li><button className="dropdown-item myMenu" onClick={() => props.setValue(true)}> Image&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                </button></li>
                <li><button className="dropdown-item myMenu" onClick={() => props.setValueVideo(true)}>Video&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                        <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                </button></li>
                <li><a className="dropdown-item myMenu" onClick={() => props.setValueRecord(true)}>Voice&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                </a></li>
            </ul>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" id="message" onKeyPress={handleKeypress}></input>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onClick}>Send</button>
        </div>
    );
}
export default Input;
