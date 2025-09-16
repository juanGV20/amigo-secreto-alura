// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let nombreAmigo = '';


function agregarAmigo() {
    let elemento = document.getElementById("amigo");
    nombreAmigo = elemento.value;
    if(!nombreAmigo){
        alert('Por favor ingrese un nombre en el campo!!')
    } else{
        listaAmigos.push(nombreAmigo);
        limpiarCampo(elemento);
        console.log(listaAmigos)
    }
}

function limpiarCampo (elemento){
    elemento.value = ''
}
