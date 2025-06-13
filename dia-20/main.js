import { renderizar, renderizarClientesFrecuentes } from "./funciones.js";
import { cliente } from "./data.js";

let lista = document.querySelector("#lista-clientes");
let frecuentes = document.querySelector("#clientes-frecuentes");
for (let i = 0; i < cliente.length; i++) {
  renderizar(cliente[i], lista);
}
for (let i = 0; i < cliente.length; i++) {
  renderizarClientesFrecuentes(cliente[i], frecuentes);
}
/* renderizar el cliente completo 
funcion para traer solo a los clientes q hayan realizado mas de una compra
renderizar en una cards en tablas  en listas
tiempo :45 mins mas 15 min de receso
*/
