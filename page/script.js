const loginSec = document.getElementById("login-section");
const loginButton = document.getElementById("login-bttn");
const loginError = document.getElementById("login-error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = loginSec.username.value;
    const pass = loginSec.password.value;

    if (user == "username123" && pass == "password"){
        alert("You have successfully logged in.");
        location.href = "page.html";
    } else {
        loginError.style.opacity = 1;
    }

})