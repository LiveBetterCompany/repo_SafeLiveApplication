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

function validateCredentials() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   
    fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => {
            var validCredentials = false;

           
            for (var i = 0; i < data.length; i++) {
                if (data[i].email === email && data[i].password === password) {
                    validCredentials = true;
                    break;
                }
            }

            
            if (validCredentials) {
                window.location.href = 'index.html';
            } else {
                alert('Correo o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
