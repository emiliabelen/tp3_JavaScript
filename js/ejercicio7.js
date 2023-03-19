// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt(`Ingrese un numero`));

if (!isNaN(numero)){
    multiplicacionNum (numero);
}

function multiplicacionNum (numero){

    document.write(`<table><thead>`)
    document.write(`<tr><th>Tabla de Multiplicar del ${numero} del 1 al 10 </tr></th>`);
    document.write(`<tbody>`);
for (let i=1; i<=0; i++) {

}
    document.write(`<tr>`);
    document.write(`<td>${numero} x ${i} = </td>`);
    document.write(`<td>` + numero *1 + `</td>`);
    
    document.write(`</tr>`);
document.write(`</tbody>`);
}

