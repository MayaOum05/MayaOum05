const loginSec = document.getElementById("login-section");
const loginButton = document.getElementById("login-bttn");
const loginError = document.getElementById("login-error");

if (loginButton){
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const user = loginSec.username.value;
        const pass = loginSec.password.value;

        if (user == "User" && pass == "CodingIsFun"){
            location.href = "page.html";
        } else {
            loginError.style.opacity = 1;
        }
    });
}


