function registro(){
    window.location.href = "registro.html";
}

function volver(){
    window.location.href = "login.html";
}

function login() {
    var user, pass;
    user = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    if(user == "andy@hotmail.com" && pass == "1234"){
        window.location="index.html";
    }
}

function cerrarSesion(){
    window.location.href = "login.html";
}