import MassageGet from "./MassageGet";
import MassageSent from "./MassageSent";
import PicSend from "./PicSend";
import VideoSend from "./VideoSend";
import AudioSend from "./AudioSend";

function messageG(str){
    return(
        <MassageGet text={str} />
    );
}
function messageS(str){
    return(
        <MassageSent text={str} />
    );
}

function ShowMessages({messages}){
    return messages.map(message => {
            if (message.getM == true){
                if (message.type.toString() == "text"){
                    return messageG(message.data.toString());
                }
            }else {
                if (message.type.toString() == "text"){
                    return messageS(message.data.toString());
                } if (message.type.toString() == "pic"){
                    return PicSend(message.data);
                } if (message.type.toString() == "video"){
                    return VideoSend(message.data);
                } if (message.type.toString() == "audio"){
                    return AudioSend(message.data);
                }
            }
        });
}



export default ShowMessages;