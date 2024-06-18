// Ejercicio 1

const conversor = (temperatura) => (temperatura * 9/5) + 32;

console.log(conversor(5));

// Ejercicio 2


const mensaje = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;

console.log(mensaje("Juan", 30));

// Ejercicio 3

const kilometros = 1.60934;

const conversor1 = (millas) => millas * kilometros;

console.log(conversor1(2));

// Ejercicio 4

const queLlevar = (palabra) => palabra == "Lluvia" ? "Se aproxima una tormenta, llevar paraguas." : "El dia esta soleado, llevar sombrero.";


console.log(queLlevar("Lluvia"));