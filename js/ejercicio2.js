//Crear un script que solicite al usuario mediante un prompt
//el nombre de ciudades y almacenarlas en un arreglo, cuando
//el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudades = [];
let ciudad = ``;

do {
  ciudad = prompt(`Ingrese el nombre de una ciudad`).toLocaleLowerCase(0);
  if (ciudad != null) {
    ciudades.push(ciudad);
  }
} while (ciudad != null);

document.write(`<ul>`);
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]} </li>`);
}

document.write(`</ul>`);

//Mostrar la longitud del arreglo.

document.write(`<h2>Longitud del Array</h2>`);
document.write(`La longitud del array es ${ciudades.length}`);

document.write(`<hr>`);

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

document.write(`<h2>Mostrar los items 1, 3 y el ultimo </h2>`);

document.write(`El 1 elemento es ${ciudades[0]}`);
document.write(`El 3 elemento es ${ciudades[2]}`);
document.write(`El 1ultimo elemento es ${ciudades[ciudades.length - 1]}`);
document.write(`<hr>`);


//Añade en última posición la ciudad de París.

document.write(`<h2>Agregamos un ultimo elemento a la lista </h2>`);
ciudades.push (`Paris`);

document.write(`<ul>`);
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]} </li>`);
}

document.write(`</ul>`);
document.write(`<hr>`);


//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<h2>El 2 elemento de la lista </h2>`);
document.write(`<h2>El 2 elemento a la lista es ${ciudades[1]} </h2>`);
document.write(`<hr>`);


//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write(`<h2>Sustituimos el 2 elemento </h2>`);
ciudades[1]=`Barcelona`;

document.write(`<ul>`);
for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {
  document.write(`<li>${ciudades[ciudad]} </li>`);
}

document.write(`</ul>`);
document.write(`<hr>`);