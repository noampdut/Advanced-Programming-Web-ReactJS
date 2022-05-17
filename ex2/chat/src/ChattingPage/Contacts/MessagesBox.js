import ContactsListResult from "./ContactsListResult";
import './messagesBox.css';

function MessagesBox({contactsList,changeContact}) {
    return(
        <div className="messages-box">
            <div className="list-group rounded-0 myMessageBox">
                <ContactsListResult contactsList={contactsList} changeContact={changeContact} />
            </div>
        </div>
    );
    }
    
    export default MessagesBox;