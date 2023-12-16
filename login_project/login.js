// Pobranie odwolania do formularza logowania, przycisku logowania i alertu bledu
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// oczekiwanie na kliknięcie na przycisku logowania
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
// pobranie loginu i hasla wprowadzonych przez uzytkownika
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// okrelsenie komunikatu jaki ma sie wyswietlic w zaleznosci od poprawnosci wpisanych danych
// jezeli puste
    if (username === "" && password === "") {
        alert("Login and password fields are empty, please complete them.");
        location.reload();
// jezeli poprawne        
    } else if (username === "login" && password === "password") {
        alert("You have successfully logged in.");
        location.reload();
// jezeli niepoprawne        
    } else {
        alert("Login failed. Please check your username and password.");
        location.reload();
    }
    
})
