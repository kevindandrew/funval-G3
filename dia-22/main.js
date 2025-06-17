/* codigo sincrono */

/* console.log("1 levantamos");
console.log("2 cepillamos los dientes");
console.log("3 desayunamos");
console.log("4 hacemos lectura de libro de mormon");
console.log("5 entramos a clases");
 */
/* CODIGO ASINCRONO */

console.log("1 pedir una pizza");

setTimeout(() => {
  console.log("2 llego la pipza :v ");
}, 2000);

console.log("3 mirar una serie ");
setTimeout(() => {
  console.log("4 te fuiste a lavar los platos ");
}, 4000);
console.log("5 alistar la mesa");

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

function traerDatos() {
  let exito = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("code :422 error con la peticion ");
      }
    }, 3000);
  });
}

traerDatos()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err));
