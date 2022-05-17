import './PopupWindow.css';

function Popup(props) {

    const onChange = e => 
    {
        
        props.onchange(e);
        
    };
    const onSubmit = e =>
    {
        const nickName = document.getElementById("nickName").value;    
        e.preventDefault();
        props.addContact(nickName);
        props.setTrigger(false);
        
    };

    const handleKeypress = e => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    };

    return (props.trigger) ? (
        <div className="window" >
            <div className="titlePopUp"> Add New Contact</div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact`s Name</label>
                    <input type="text" id="nickName"  name="nickName" onChange={onChange} onKeyPress={handleKeypress} className="form-controlPopUp"></input>
                </div>
                <button type="button" className="btn btn-light" onClick={onSubmit} >Add </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </form>

        </div>
    ) : "";
}

export default Popup;