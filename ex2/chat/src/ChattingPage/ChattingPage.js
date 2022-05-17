import ChatScreen from "./Chatroom/ChatScreen/ChatScreen";
import'./ChattingPage.css';

function ChattingPage({activeUser}){

    return(
        <div className="ChattingPage">
            <ChatScreen activeUser={activeUser}/>
        </div>

    );
}

export default ChattingPage;