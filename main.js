const error = document.getElementsByClassName("error")[0];
const submitButton = document.getElementsByClassName('signup')[0];
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

function passwordCheck(){
    if (password !== passwordConfirm){
        error.style.visibility = 'visible';
    } 
}

submitButton.addEventListener('click', passwordCheck);
