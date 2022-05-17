
// the function return true if the password is valid.
function validationPassword(password) {
    if(password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    if(!(/[0-9]/.test(password))) {
        alert("Password must include at least one digit.");
        return false;
    }
    if(!(/[a-zA-Z]/.test(password))) {
        alert("Password must include at least one character.");
        return false;
    }
    return true;
}

export default validationPassword;