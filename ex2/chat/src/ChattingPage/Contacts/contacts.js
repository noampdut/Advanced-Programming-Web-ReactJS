const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]

const contacts = [{userName: 'Luli', lastMessage :'Great!', time: '4/20/2022, 5:35:23 PM', picture: 'luli.jpeg', messages: [...MessagesList]},
                      {userName: 'Oscar', lastMessage :'Great!', time: '4/20/2022, 5:30:00 PM', picture: 'User-Profile.png', messages: [...MessagesList]},
                      {userName: 'Dani', lastMessage :'Great!', time: '3/20/2022, 5:00:21 PM', picture: 'profile.jpg', messages: [...MessagesList]},
                        {userName: 'Gal Gadot', lastMessage: 'Great!', time: '3/20/2022, 4:35:23 PM', picture: "galGadot.jpg", messages: [...MessagesList]},
                        {userName: 'Ronaldo', lastMessage: 'Great!', time: '3/20/2022, 3:35:23 PM', picture: "ronaldo.jpg", messages: [...MessagesList]}
                    ];

function IsInContactList(user, contactsList) {
    for (var i = 0; i < contactsList.length; i++) {
        if (contactsList[i].userName == user) {
            alert("This user is alreay in your contacts list");
            return true;
        }
    }
    return false;
}


  export default contacts;
  export {IsInContactList};                               