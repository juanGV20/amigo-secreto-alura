
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
        actualizarLista(listaAmigos);
    }
}

function limpiarCampo (elemento){
    elemento.value = ''
}

function actualizarLista(listaAmigos){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(amigo => {
        console.log(amigo);
        const nuevaEtiqueta = document.createElement('li')
        nuevaEtiqueta.textContent = amigo;
        lista.append(nuevaEtiqueta);
    });
}
