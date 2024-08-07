/*
Desafío: hora de practicar
Próxima Actividad
Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un
 papel crucial en la organización, modularización y reutilización del código.
Con eso en mente, hemos creado una lista de desafíos (no obligatorios) centrados en la práctica para mejorar aún más tu experiencia de 
aprendizaje. ¡Vamos a practicar entonces!
Desafíos*/
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript','C','C++', 'Kotlin','Python'];

//Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
function mostrarLenguajes(lenguajesDeProgramacion) {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
        }
}

    // Llamada a las funciones para probar
mostrarLenguajes(lenguajesDeProgramacion);  // Muestra todos los lenguajes en orden


//Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion
//en orden inverso.
function mostrarLenguajesInverso(lenguajesDeProgramacion) {
    for (let i = lenguajesDeProgramacion.length-1; i >=0 ; i--) {
        console.log(lenguajesDeProgramacion[i]);
        }
    }

    // Llamada a las funciones para probar
mostrarLenguajesInverso(lenguajesDeProgramacion);  // Muestra todos los lenguajes en orden inverso

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [6,7,8,9,10,5];

function promedioNumeros(listaNumeros) {
    let counter = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        counter = counter + listaNumeros[i];
        }
    let promedio = counter / listaNumeros.length;
    console.log(promedio);
    return promedio;
    
}

    // Llamada a las funciones para probar
promedioNumeros(listaNumeros);  // Muestra promedio de numeros


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mayorMenorNumeros(listaNumeros) {
    let menor = listaNumeros[0];
    let mayor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] >= mayor) {
            mayor = listaNumeros[i];
            }
    
        if (listaNumeros[i] <= menor) {
                menor = listaNumeros[i];
            }
    }
    console.log(mayor);
    console.log(menor);
    // Retorna los valores encontrados
return { mayor, menor };
}
    // Llamada a las funciones para probar
mayorMenorNumeros(listaNumeros);  // Muestra mayor y menor

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaLista(listaNumeros) {
    let counter = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        counter = counter + listaNumeros[i];
        }
    console.log(counter);
    return counter;
}
    // Llamada a las funciones para probar
sumaLista(listaNumeros);  // Muestra suma de numeros

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado 
//como parámetro, o -1 si no existe en la lista.

function existeEnLista(listaNumeros,parametro) {
    for (let i = 0; i < listaNumeros.length; i++) {
        
        if (listaNumeros[i]=== parametro){
            console.log(i)
            return i;
        }
    }
    
    return -1;
}
    
existeEnLista(listaNumeros,8);  // Muestra si el numero está en la lista

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
//con la suma de los elementos uno a uno.

function sumaListas(listaA, listaB) {
    let nuevaLista = [];
    if (listaA.length === listaB.length) {
        for (let i = 0; i < listaA.length; i++) {        
            let elemento = listaA[i] + listaB[i] 
            nuevaLista.push(elemento); 
        }
        return nuevaLista;
    } else {
        return "las listas no tienen el mismo tamaño";
    }
}    


//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function numerosCuadrados(listaNumeros) {
    let listaCuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        let cuadrado = listaNumeros[i] * listaNumeros[i];
        console.log(cuadrado);
        listaCuadrados.push(cuadrado); 
        }
    console.log(listaCuadrados);
    return listaCuadrados;
}

numerosCuadrados(listaNumeros);  // Muestra ls cuadrados de una lista en una nueva lista
