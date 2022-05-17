import './chatScreen.css';
import { useState, React } from 'react';
import AddContactButton from '../../Contacts/AddContactButton';
import contacts from '../../Contacts/contacts';
import { isInUserList } from '../../../DataBase/dataBase';
import { IsInContactList } from '../../Contacts/contacts';
import { getPic } from '../../../DataBase/dataBase';
import MessagesBox from '../../Contacts/MessagesBox';
import MessageScrollBar from './MessageScrollBar';
import View from './View';


function ChatScreen({activeUser}) {
    const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [videoPopUp, setVideoPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);
    const [messages, setMessage] = useState(MessagesList);
    const [startScreen, setStartScreen] = useState(true);
    const [currentContactState, setCurrentContact] = useState({userName:'', picture:''});
    const [index, setContactIndex] = useState(0);
    const [contactsList, setContactsList] = useState(contacts);

    
    const addMessage = text => {
        text = text.trim();
        if (text != ""){
            let contact = contactsList[index];
            let new_message = {'type':"text", 'data':text, 'getM':false, 'time':new Date()};
            contact.lastMessage=text;
            contact.time=new_message.time.toLocaleString();
            contact.messages.push(new_message);
            setContactsList(contactsList);
            setMessage([...messages, new_message]);
        }    
    };

    const addContact = function (user) {
        if(isInUserList(user) && !IsInContactList(user, contactsList)) {
            if(activeUser.userName == user) { 
                alert(user +", You can not create a new conversition with yourself.");
                 return;
            }
            setContactsList([{ userName: user, lastMessage: '', time: '', picture: getPic(user), messages: []}, ...contactsList]);
        }
    }
    
    const onchange = function (e) {
    }

    const changeContact = function (user, picture, lastMessage) {
        let i=0;
        for(; i<contactsList.length; i++){
            if(contactsList[i].userName == user){
                setContactIndex(i);
                break;
            }
        }
        setStartScreen(false);
        setCurrentContact({userName: user, picture: picture, lastMessage: lastMessage});
        setMessage([...contactsList[i].messages]);
    }
    const addImg = (file) => {
        var fr = new FileReader();
        fr.onload = function () {
            let contact = contactsList[index];
            let new_message = {'type': "pic", 'data':fr.result, 'getM':false, 'time':new Date()}
            contact.time=new_message.time.toLocaleString();
            contact.lastMessage="Image";
            contact.messages.push(new_message);
            setContactsList(contactsList);
            setMessage([...messages, new_message]);
        }
        fr.readAsDataURL(file);
    };

    const addVideo = (file) => {
        var fr = new FileReader();
        fr.onload = function () {
            let contact = contactsList[index];
            let new_message = {'type': "video", 'data':fr.result, 'getM':false, 'time':new Date()}
            contact.time=new_message.time.toLocaleString();
            contact.lastMessage="Video";
            contact.messages.push(new_message);
            setContactsList(contactsList);
            setMessage([...messages, new_message])
        }
        fr.readAsDataURL(file);
    }

    const addAudio = (audio) =>{
        let contact = contactsList[index];
        let new_message = {'type': "audio", 'data':audio, 'getM':false, 'time':new Date()};
        contact.time=new_message.time.toLocaleString();
        contact.lastMessage="Audio";
        contact.messages.push(new_message);
        setContactsList(contactsList);
        setMessage([...messages, new_message]);
    }

    return (
        <div className="py-5 px-4 ">
            <div className="px-0 mylist">
                <a className="list-group-item list-group-item-action list-group-item-light rounded-0">
                    <div className="media"><img width="60" height="60" src={activeUser.picture} alt="user" className="rounded-circle"></img>&nbsp;Hi {activeUser.userName}!
                        <div className="media-body ml-4">
                            <div className="d-flex align-items-center justify-content-between mb-1">
                            </div>
                        </div>
                    </div>
                </a>
                <div className="bg-gray px-4 py-2 bg-light">
                    <p className="h5 mb-0 py-1">Contacts &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                            <AddContactButton addContact={addContact} onchange={onchange} />
                        </span>
                    </p>
                </div>
                <MessageScrollBar>
                    <MessagesBox contactsList={contactsList} changeContact={changeContact} />
                </MessageScrollBar>
            </div>
           
            <div className='chatBackground'>
                <View startScreen={startScreen} setButtonPopUp={setButtonPopUp} setVideoPopUp={setVideoPopUp} setRecordPopUp={setRecordPopUp} messages={messages}
                 buttonPopUp={buttonPopUp} 
                 videoPopUp={videoPopUp} 
                 addMessage={addMessage}
                 addAudio={addAudio}
                 addVideo={addVideo}
                 addImg={addImg}
                 currentContact={currentContactState.userName}
                 currentPicture={currentContactState.picture}
                 recordPopUp={recordPopUp}/>
            </div>
        </div>
    );
}


export default ChatScreen;
