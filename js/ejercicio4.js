//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


let numero = parseInt (prompt(`Ingrese un numero cualquiera`));
if (!isNaN(numero)){
    parImpar (numero);
}


function parImpar (num){
    if (num %2 === 0) {
        document.write (`<h2>El numero ${num} es par</h2>`)
    }else{
        document.write (`<h2>El numero ${num} es impar</h2>`)
    }
}


