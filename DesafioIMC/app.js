//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura 
//en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC() {
    let alturaM = parseFloat(prompt('Ingrese su altura en metros', 0));
    let pesoK = parseFloat(prompt ('Ingrese su peso en Kilogramos', 0));

    if (!isNaN(alturaM) && !isNaN(pesoK) && alturaM > 0 && pesoK > 0) {
        let imc = pesoK/(alturaM*alturaM);
        alert(`Su IMC es: ${imc.toFixed(2)}`);
        return imc;
    } else {
        alert('Por favor ingrese valores válidos para altura y peso.');
        return null;
    }
}
    
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial() {
    let numeroFactorial = parseInt(prompt('Ingrese un número para calcular su factorial', 0));
    if (isNaN(numeroFactorial) || numeroFactorial < 0) {
        return 'Por favor, ingrese un número entero positivo.';
    }

    let factorial = 1;
    for (let i = 1; i <= numeroFactorial; i++) {
        factorial *= i;
    }
    alert ('El factorial de ' + numeroFactorial + ' es ' + factorial);
    return factorial;
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function cambiaraReales() {
    let valorR = 5.57 // 1 dolar equivale a esa cantidad en reales
    let valorD = parseFloat(prompt ('Ingrese una cantidad de Dolares que desee convertir a Reales', 0));

    if (!isNaN(valorD) && valorD > 0) {
        let cambioR = valorD * valorR;
        alert(`Su conversión equivale a : ${cambioR.toFixed(2)} Reales.`);
        return cambioR;
    } else {
        alert('Por favor ingrese valores válidos para altura y peso.');
        return null;
    }
}


//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function calculosRectangulo() {
    let altoR = parseFloat(prompt('Ingrese alto del rectángulo', 0));
    let anchoR = parseFloat(prompt ('Ingrese ancho del rectángulo', 0));
    
    if (!isNaN(altoR) && !isNaN(anchoR) && altoR > 0 && anchoR > 0) {
        let perimetroR = (2*altoR)+(2*anchoR);
        let areaR = (altoR*anchoR);
        alert(`Para los valores proporcionados, el perimetro es: ${perimetroR.toFixed(2)}\ny el area es: ${areaR.toFixed(2)} `);
        return imc;
    } else {
        alert('Por favor ingrese valores válidos para alto y ancho.');
        return null;
    }
}


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calculoCirculo() {
    let pi = 3.14;
    let radio = parseFloat(prompt ('Ingrese el valor del radio de la circunferencia', 0));
    
    if (!isNaN(radio) && radio > 0) {
        let perimetroC = 2*pi*radio;
        let areaC = pi*(radio*radio);
        alert(`Para el valor de radio proporcionado, el perimetro es: ${perimetroC.toFixed(2)}\ny el area es: ${areaC.toFixed(2)} `);
        return perimetroC + areaC;

    } else {
        alert('Por favor ingrese un radio válido.');
        return null;
    }
}

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablas() {
    let numeroT = parseInt(prompt('Ingrese un numero para calcular su tabla de multiplicar', 0));

    if (!isNaN(numeroT)) {
        alert(`Su tabla de multiplcar es:\n${numeroT} x 1 = ${numeroT} \n${numeroT} x 2 = ${numeroT*2}\n${numeroT} x 3 = ${numeroT*3} \n${numeroT} x 4 = ${numeroT*4}\n${numeroT} x 5 = ${numeroT*5} \n${numeroT} x 6 = ${numeroT*6}\n${numeroT} x 7 = ${numeroT*7} \n${numeroT} x 8 = ${numeroT*8}\n${numeroT} x 9 = ${numeroT*9} \n${numeroT} x 10 = ${numeroT*10}\n`);
        return tabla;
    } else {
        alert('Por favor ingrese un valor válido.');
        return null;
    }

}
