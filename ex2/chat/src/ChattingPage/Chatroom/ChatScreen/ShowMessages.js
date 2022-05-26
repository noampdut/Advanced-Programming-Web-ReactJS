import MassageGet from "./MassageGet";
import MassageSent from "./MassageSent";
import PicSend from "./PicSend";
import VideoSend from "./VideoSend";
import AudioSend from "./AudioSend";

function messageG(str){
    return (
        <MassageGet content={str} />
    );
}
function messageS(str){
    return (
        <MassageSent content={str} />
    );
}

function ShowMessages({messages}){
    return messages.map(message => {
        
        if (message.sent == true) {
            return messageG(message.content.toString());
        } else {
            return messageS(message.content.toString());
        }
    });
}



export default ShowMessages;