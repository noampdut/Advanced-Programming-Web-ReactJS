const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

function ContactInList({userName, time, lastMessage, picture, changeContact}) {
    //var timeSTR=time.toISOString()
    return (
        <button type="button" onClick={() => changeContact(userName, picture, lastMessage)} className="list-group-item list-group-item-action list-group-item-light rounded-0">
            <div className="media"><img src={picture} alt="user" height="50" width="50" className="rounded-circle"></img>
                <div className="media-body ml-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">{userName}</h6><small className="small font-weight-bold">{time}</small>
                    </div>
                    <p className="font-italic text-muted mb-0 text-small">{lastMessage}</p>
                </div>
            </div>
        </button>

    );

}


export default ContactInList;