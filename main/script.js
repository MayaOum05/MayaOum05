const loginSec = document.getElementById("login-section");
const loginButton = document.getElementById("login-bttn");
const loginError = document.getElementById("login-error");

if (loginButton){
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const user = loginSec.username.value;
        const pass = loginSec.password.value;

        if (user == "user123" && pass == "12345"){
            alert("Login Successful!");
            location.href = "page.html";
        } else {
            loginError.style.opacity = 1;
        }
    });
}

const changeText = document.getElementById('text');
const nextButton = document.getElementById('next-bttn');

nextButton.addEventListener("click", (e) => {
    changeText.innerHTML = "I am a self-taught Front-End Web Developer currently working towards my A.A. at Valencia College.";

}) 
