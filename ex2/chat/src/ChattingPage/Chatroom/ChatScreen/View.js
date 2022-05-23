import CurrentUserChat from "./CurrentUserChat";
import Input from "./Input";
import ChatScrollBar from "./ChatScrollBar";
import PopUp from "./PopUp";
import VideoPopUp from "./VideoPopUp";
import VoicePopUp from "./VoicePopUp";
import ShowMessages from "../ChatScreen/ShowMessages";
import { useEffect } from "react";


function View (props) {

    useEffect(() =>{
        var scrool = document.getElementById("chatScroll");
        if (scrool)
        {
            scrool.scrollTop = scrool.scrollHeight - scrool.clientHeight;
        }
    });

    if (!(props.startScreen)){
        return (
            <div>
                <CurrentUserChat user={props.currentContact} picture={props.currentPicture} />
                <Input setValue={props.setButtonPopUp} setValueVideo={props.setVideoPopUp} setValueRecord={props.setRecordPopUp} addMessage={props.addMessage} user={props.currentContact} server={props.currentContactServer} activeUser={props.activeUser} />
             <ChatScrollBar>
                 <ShowMessages messages={props.messages} />
             </ChatScrollBar>
             <PopUp value={props.buttonPopUp} setValue={props.setButtonPopUp} addImg={props.addImg} user={props.currentContact} />
             <VideoPopUp value={props.videoPopUp} setValue={props.setVideoPopUp} addVideo={props.addVideo} user={props.currentContact}/>
             <VoicePopUp value={props.recordPopUp} setValue={props.setRecordPopUp} addAudio={props.addAudio} user={props.currentContact}/>
        </div> 
        );
    
    } else{
        return ("");
    }
}

export default View;