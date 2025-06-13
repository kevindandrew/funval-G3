import {
  suma,
  resta,
  multiplicacion,
  division,
  renderizar,
} from "./funciones.js";
import { cliente } from "./data.js";

let lista = document.querySelector("#lista-clientes");

for (let i = 0; i < cliente.length; i++) {
  renderizar(cliente[i], lista);
}
