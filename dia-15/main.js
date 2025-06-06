/* SELECCION DE ELEMENTOS */

let titulo = document.getElementById("titulo");
let parrafo = document.querySelector(".parrafo");
let contendor = document.querySelector(".contenedor");
let imagen = document.querySelector("#imagen-jesucristo");
/* MODIFICADORES DE ELEMENTOS */

titulo.textContent = "Hola estudiantes de funval";

contendor.innerHTML = "<p>hola kevin ya te recuperaste?</p>";

/* modificadores de atributos y clases */
/* atributos */
console.log(imagen.getAttribute("src"));
imagen.setAttribute(
  "src",
  "https://www.shutterstock.com/image-illustration/jesus-christ-holding-lamb-his-260nw-2352359419.jpg"
);
/* clases */
console.log(contendor.classList);

contendor.classList.add("kevin");

contendor.classList.remove("kevin");

contendor.classList.toggle("kevin");

console.log(contendor.classList.contains("pablo"));
