const publicacionForm = document.getElementById('publicacionForm');
const tituloPublicar = document.getElementById('tituloPublicar');
const description = document.getElementById('description');
const foto = document.getElementById('foto');
// const emailI = document.getElementById('email');
// const passwordI = document.getElementById('password');
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const formLogin = document.getElementById('formLogin');

const publicacionList = document.getElementById("publicacionList");

window.addEventListener('DOMContentLoaded', ()=>{
    //funciones
    getPublicacionList();
});


/* ---------------------------------------------- */


//REGISTRO
publicacionForm.addEventListener('submit', e=>{
    e.preventDefault();
    // const publicacionForm  = publicacionForm.value;
    const tituloPublicarI = tituloPublicar.value;
    const descriptionI = description.value;
    const fotoI   = foto.value;
    // const password= passwordI.value;

    //CREACION DEL JSON
    const publicacion = {
        titulo:tituloPublicarI,
        description:descriptionI,
        url:fotoI
    }

    fetch('http://localhost:3000/publicaciones', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(publicacion)
    }).then(response=>response.json())
    .then(data=>{
        console.log('Publicacion registrada', data);
        publicacionForm.reset();
    }).catch(error=>{
        console.error('Error: ',error);
    })

});


/* ---------------------------------------------- */



const getPublicacionList = () => {
    fetch("http://localhost:3000/publicaciones")
        .then((response) => response.json())
        .then((data) => {
            const publicaciones = data;
            updatePublicacionList(publicaciones);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const updatePublicacionList = (publicaciones) => {
    publicacionList.innerHTML = "";

    publicaciones.forEach((publicacion) => {
        const publicacionCard = document.createElement("div.publicacion");
        publicacionCard.className = "publicacionjs";
        // publicacionCard.className = "publish";
        // publicacionCard.className = "h3.publish";
        // publicacionCard.className = "publish h4.descripcion";
        publicacionCard.dataset.publicacionId = publicacion.id;
        publicacionCard.innerHTML = `
                
        <h3 style="font-size: 28px">${publicacion.titulo}</h3>
        <h3 style="font-size: 20px" >${publicacion.description}</h3>
        <img style = "width: 400px; height: 350px;" src="${publicacion.url}" alt="">
               
    
      `;
        publicacionList.appendChild(publicacionCard);
    });
};