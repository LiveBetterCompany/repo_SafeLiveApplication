const usuarioForm = document.getElementById('usuarioForm');
const nombreI = document.getElementById('nombre');
const paternoI = document.getElementById('paterno');
const maternoI = document.getElementById('materno');
const emailI = document.getElementById('email');
const passwordI = document.getElementById('password');

window.addEventListener('DOMContentLoaded', ()=>{
    //funciones

});

//REGISTRO
usuarioForm.addEventListener('submit', e=>{
    e.preventDefault();
    const nombre  = nombreI.value;
    const paterno = paternoI.value;
    const materno = maternoI.value;
    const email   = emailI.value;
    const password= passwordI.value;

    const usuario = {
        nombre:nombre,
        paterno:paterno,
        materno:materno,
        email:email,
        password:password
    }

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(usuario)
    }).then(response=>response.json())
    .then(data=>{
        console.log('Usuario registrado', data);
        usuarioForm.reset();
    }).catch(error=>{
        console.error('Error: ',error);
    })

});