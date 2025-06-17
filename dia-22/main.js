/* codigo sincrono */

/* console.log("1 levantamos");
console.log("2 cepillamos los dientes");
console.log("3 desayunamos");
console.log("4 hacemos lectura de libro de mormon");
console.log("5 entramos a clases");
 */
/* CODIGO ASINCRONO */
/* 
console.log("1 pedir una pizza");

setTimeout(() => {
  console.log("2 llego la pipza :v ");
}, 2000);

console.log("3 mirar una serie ");
setTimeout(() => {
  console.log("4 te fuiste a lavar los platos ");
}, 4000);
console.log("5 alistar la mesa");
 */
/* PROMESAS */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];

function traerDatos() {
  setTimeout(() => {
    return datos;
  }, 1500);
} */

//console.log(traerDatos()); /// aqui le promete al clg q en algun momento le va llegar los datos
/* console.log("hola chamos"); */

/* COMO SE CREAN PROMESAS */

let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];
/* ella me prometio esperarme 2 años */
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("me mando el querido Juan");
      }
    }, 7000);
  });
}
let lista = document.querySelector("#listado");
lista.innerHTML = `
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
`;
traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `<li><p>nombre: ${estudiante.nombre}</p>
      <p>edad:${estudiante.edad}</p></li>`;
    });
  })
  .catch((err) => console.log(err));
