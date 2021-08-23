'use strict';


let usersArray = [];

function Login(email, password) {
    this.email = email;
    this.password = password;
    usersArray.push(this);
}

let preUser = new Login('test@ask.com', '1234');

function saveToLocalStorage() {
    let data = JSON.stringify(usersArray);
    localStorage.setItem('users', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('users');
    let normalObj = JSON.parse(stringObj);

    if (normalObj) {
        usersArray = normalObj;
    }
}

readFromLocalStorage();

let signIn = document.getElementById('signIn-form');

signIn.addEventListener('submit', check);

function check(event) {

    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    for (let i = 0; i < usersArray.length; i++) {
        if (email == usersArray[i].email) {
            if (password == usersArray[i].password) {
                window.location.replace('index.html');
                break;
            }
            else {
                alert('Did you forgot your password?');
                break;
            }
        }
        else {
            if (i == usersArray.length - 1 && email != usersArray[i].email) {
                alert('Email is not registered..');
            }
        }
    }
}

let signUp = document.getElementById('signUp-form');

signUp.addEventListener('submit', sign);

function sign(event) {

    event.preventDefault();

    let used = false;
    let email = event.target.newEmail.value;
    let password1 = event.target.newPassword.value;
    let password2 = event.target.passwordRepeat.value;
    let password;

    for (let i = 0; i < usersArray.length; i++) {
        if (email == usersArray[i].email) {
            alert('This E-mail is already used..');
            used = true;
            break;
        }
    }
    if (used == false) {
        if (password1 == password2) {
            password = password1;
            new Login(email, password);
            saveToLocalStorage();
            window.location.replace('index.html');
        }
        else {
            alert('Password is not same..');
        }
    }
}
