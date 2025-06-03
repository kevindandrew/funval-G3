/* STRINGS */

let nombre = "Kevin";
/* TEMPLATE LITERALS */

let apellido = `${nombre} Rodriguez`;

/* CONCATENACION */
console.log(nombre + " rodriguez");

console.log(apellido);

/* metodos y funciones basicas de los strings */

console.log(nombre.length); /*  extra la cantidad de caracteres del string */
console.log(apellido.length);
console.log(
  nombre.indexOf("T")
); /* devuelve el numero de la posicion dnd inicia el sub-string  si no existe da -1 */
console.log(nombre.toLowerCase()); /* convierte todo a minusculas */
console.log(nombre.toUpperCase()); /* convierte todo a MAYUSCULAS */
console.log(nombre.includes("tho")); /* revisa si el  sub existe */
console.log(
  nombre.slice(2, 4)
); /* corta u crea un sub string sin alterar el original  */
console.log(nombre[3]); /* trae el caracter de esa posicion */

/* CONDICIONALES 

//IF

if (condicion) {
   todo lo q vendra aqui es el codigo q se ejecutara cuando la condicion sea true
}

//IF ELSE

if (condicion) {
  todo lo q vendra aqui es el codigo q se ejecutara cuando la condicion sea true
} else {
  todo lo q vendra aqui es el codigo q se ejecutara cuando la condicion sea false
}

//IF ELSE IF

if (condicion) {
   todo lo q vendra aqui es el codigo q se ejecutara cuando la condicion sea true
} else if (condicion2) {
   todo lo q vendra aqui es el codigo q se ejecutara cuando la condicion2 sea true
} else {
   todo lo q vendra aqui es el codigo q se ejecutara cuando las condiciones sean false
}
 */
let permisoMama = false;
let Kevin;

let edadDisco = 12;
/* quienes son false 0 NULL UNDEFINED "" */

if (edadDisco >= 18) {
  console.log("puedo entrar a la disco");
} else if (edadDisco >= 16) {
  console.log("puedes ir al cine");
} else {
  console.log("te vas a cas");
}

/* EJERCICIOS STRINGS */

// 1. Concatena dos cadenas de texto

// 2. Muestra la longitud de una cadena de texto

// 3. Muestra el primer y último carácter de un string

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud
