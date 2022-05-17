import './currentUserChat.css';

function CurrentUserChat({user, picture}){
    return (
        <div className='back'>
            <div className="messages-box"> </div>
            <a className="list-group-item list-group-item-action active text-white rounded-0">
                <div className="media"><img src={picture} alt="user" height="50" width="50" className="rounded-circle"></img>
                    &nbsp;{user}
                    <div className="media-body ml-1">
                        <div className="d-flex align-items-left justify-content-between mb-1">
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CurrentUserChat;