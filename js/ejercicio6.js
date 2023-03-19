//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a +b)


function calcularPerimetro(l1, l2) {
    let resultado = 0;
    resultado = 2 * (l1 + l2);
    document.write(
      `<p>El perimetro de un rectángulo de lados ${l1} y ${l2} es igual a ${resultado}.</p>`
    );
  }
  
  let lado1 = '';
  let lado2 = '';
  do {
    lado1 = parseFloat(
      prompt('Ingrese el valor del primer lado del rectángulo:')
    );
  } while (isNaN(lado1) || lado1.length === 0);
  
  do {
    lado2 = parseFloat(
      prompt('Ingrese el valor del segundo lado del rectángulo:')
    );
  } while (isNaN(lado2) || lado2.length === 0);
  
  document.write(
    '<p>Calculamos el perímetro del rectangulo segun numeros ingresados:</p>`'
  );
  
  calcularPerimetro(lado1, lado2);