let titular = document.querySelector('h1');  //Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
titular.innerHTML = 'Hora del Desafío'

function clicar () {
    alert('El botón fue clicado'); //Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
}

function ciudadDeBrasil () {
    let ciudad = prompt ('indica una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`); //Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
}

function amoJS () {
    alert('Yo amo JS');//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
}

function sumando () {
    let num1 = parseInt(prompt ('indica un numero', 0));
    let num2 = parseInt(prompt ('indica un numero', 0));
    alert (num1 + num2);//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
}

