import './PopupWindow.css';

function Popup(props) {

    const onChange = e => {};
    const onSubmit = e =>
    {
        const userName = document.getElementById("userName").value;
        const server = document.getElementById("server").value;
        const nickName = document.getElementById("nickName").value;

        e.preventDefault();
        fetch('https://localhost:5001/api/contacts?id=' + userName + '&name=' + nickName + '&server=' + server,
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    id: userName,
                    name: nickName,
                    server: server
                })
            }).then(res => {
                if (res.status == "201") {
                    // add new contact to our contact list by calling setContactList
                    props.addContact();
                    props.setTrigger(false);
                } else {
                    alert("Can not add this contact");
                    document.getElementById('userName').value = "";
                    document.getElementById('nickName').value = "";
                    document.getElementById('server').value = "";
                }
            });
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
                    <input type="text" id="userName" name="userName" onChange={onChange} className="form-controlPopUp"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact`s NickName</label>
                    <input type="text" id="nickName" name="nickName" onChange={onChange} className="form-controlPopUp"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact`s Server</label>
                    <input type="text" id="server" name="server" onChange={onChange} onKeyPress={handleKeypress} className="form-controlPopUp"></input>
                </div>
                <button type="button" className="btn btn-light" onClick={onSubmit} >Add </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </form>

        </div>
    ) : "";
}

export default Popup;