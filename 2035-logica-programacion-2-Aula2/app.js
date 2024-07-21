let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

//Desafíos:
//Crear una función que muestre "¡Hola, mundo!" en la consola.
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
