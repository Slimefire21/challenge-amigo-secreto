// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombres = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo === ''){
        alert('Porfavor ingrese un nombre');
    }else{
        nombres.push(nombreAmigo);
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = nombreAmigo;

        let lista = document.getElementById("listaAmigos");
        lista.appendChild(nuevoNombre);

        document.getElementById('amigo').value = '';
        return;
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = '';

    for (let i = 0; i < nombres.length; i++){
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombres[i];

        lista.appendChild(nuevoItem);
    }
}

function sortearAmigo(){
    if (nombres.lenght <= 0 ){
        alert('No hay amigos en la lista')
    }else{
        numerito = Math.floor(Math.random()*nombres.length);

        let elegido = nombres[numerito];

        let ganador = document.getElementById("resultado");
        ganador.innerHTML = "El amigo secreto es: " + elegido;
    }
}


