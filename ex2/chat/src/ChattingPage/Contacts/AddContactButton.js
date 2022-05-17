import './PopupWindow.css';
import Popup from "./PopupWindow";
import { useState } from "react";

function AddContactButton({ addContact, onchange }) {
    const [addContactButton, setAddContactButton] = useState(false);

    return (
        <><span>
            <button onClick={() => setAddContactButton(true)} ><img width="30" className="rounded-circle" src="2521826.png" /></button>
        </span>
            <>
            <Popup addContact={addContact} onchange={onchange} trigger={addContactButton} setTrigger={setAddContactButton}></Popup></>

        </>

    );
}

export default AddContactButton;