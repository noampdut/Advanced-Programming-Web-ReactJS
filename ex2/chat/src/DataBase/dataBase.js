
var usersList = [{
    'userName': 'noampdut',
    'nickName': 'noamit',
    'picture': 'noampdut.jpg',
    'password': 'n123456'
}, {
    'userName': 'lilach',
    'nickName': 'lilachit',
    'picture': 'poodle.jpg',
    'password': 'l123456'
},{
    'userName': 'Luli',
    'nickName': 'Luli',
    'picture': 'luli.jpeg',
    'password': 'l123456'

},{
    'userName': 'Oscar',
    'nickName': 'Oscar',
    'picture': 'User-Profile.png',
    'password': 'l123456'

},{
    'userName': 'Dani',
    'nickName': 'Dani',
    'picture': 'Profile.jpg',
    'password': 'l123456'
},{
    'userName': 'Gal Gadot',
    'nickName': 'Gal Gadot',
    'picture': 'galGadot.jpg',
    'password': 'l123456'
}, {
    'userName': 'Ronaldo',
    'nickName': 'Ronaldot',
    'picture': 'ronaldo.jpg',
    'password': 'l123456'
}];

function insertNewUser(user, nickName, picture, password) {

    if (picture == ""){
        picture = "User-Profile.png";
    }
    usersList.push({ 'userName': user, 'nickName': nickName, 'picture': picture, 'password': password });

}

function isExists(username) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == username) {
            return true;
        }
    }
    return false;
}

function getUserByUserName(user)
{
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            return { 'userName': usersList[i].userName, 'nickName': usersList[i].nickName, 'picture': usersList[i].picture };
        }
    }

    return {}
}

function userIdentification(user, Password) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            if (usersList[i].password == Password) {
                return true;
            }
            alert("Wrong password");
            return false;
        }
    }
    alert("You haven't signed up for the site yet.")
    return false;
}

function isInUserList(user) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            return true;
        }
    }
    alert("This user is not registered");
    return false;
}

function getPic(user){
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            return usersList[i].picture;
        }
    }
}



export { insertNewUser, isExists, userIdentification, isInUserList, getPic, getUserByUserName};