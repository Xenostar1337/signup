const error = document.getElementsByClassName("error")[0];
const submitButton = document.getElementsByClassName('signup')[0];
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

function passwordCheck(){
    if (password.value !== passwordConfirm.value){
        error.style.visibility = 'visible';
        console.log(password.value);
        console.log(passwordConfirm.value);
    } else {
        error.style.visibility = "hidden";
    }
}

submitButton.addEventListener('click', passwordCheck);
