import './PopupWindow.css';

function Popup(props) {

    const onChange = e => 
    {
        
        props.onchange(e);
        
    };
    const onSubmit = e =>
    {
        const userName = document.getElementById("userName").value;
        e.preventDefault();
        fetch('https://localhost:5001/api/contacts?id=' + userName + '&name=' + userName +'&server=1234',
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    id: userName,
                    name: userName,
                    server: '1234'
                })
            }).then(res => {
                //const contentType = res.headers.get("content-type");
                if (res.status == "201") {
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
                    <input type="text" id="userName" name="userName" onChange={onChange} onKeyPress={handleKeypress} className="form-controlPopUp"></input>
                </div>
                <button type="button" className="btn btn-light" onClick={onSubmit} >Add </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </form>

        </div>
    ) : "";
}

export default Popup;