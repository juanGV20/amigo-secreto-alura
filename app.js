
let listaAmigos = [];


function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombreAmigo = inputNombre.value;
    if(!nombreAmigo){
        alert('Por favor ingrese un nombre en el campo!!')
    } else{
        if(listaAmigos.includes(nombreAmigo.toUpperCase())){
            alert('Ese nombre ya esta en la lista');
            return;
        }
        listaAmigos.push(nombreAmigo.toUpperCase());
        limpiarCampo(inputNombre);
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

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('Por favor agregue nombres a la lista');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* (listaAmigos.length));
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    listaAmigos.splice(indiceAleatorio, 1);
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = amigoSeleccionado;
    if(listaAmigos.length === 0){
        alert('Lista vacia, por favor agregar nuevos elementos');
    }
    actualizarLista(listaAmigos);
}
