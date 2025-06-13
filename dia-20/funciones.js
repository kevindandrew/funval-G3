function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}
export { suma, resta, multiplicacion, division, renderizar };
