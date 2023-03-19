//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
  `Enero`,
  `Febrero`,
  `Marzo`,
  `Abril`,
  `Mayo`,
  `Junio`,
  `Julio`,
  `Agosto`,
  `Septiembre`,
  `Octubre`,
  `Noviembre`,
  `Diciembre`,
];
document.write(` <h2><strong>Lista de Meses</strong></h2>`);

document.write(`<ul>`);
for (let mes = 0; mes < meses.length; mes++) {
  document.write(`<li>${meses[mes]}</li>`);
}
document.write(`</ul>`);
