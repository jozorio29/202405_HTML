const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);

// 1. Dara salida a edad pero a salario no, ya que la variable no existe. 
// 2. 30, undefined
// 3. Una variable puede ser creada y asignada llamandolo. 

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };

console.log(resultado);

// 1. Dara salida {a: 1, b: 4, c: 5, d: 6}
// 2. { a: 1, b: 4, c: 5, d: 6 }
// 3. Los datos se sobreescriben

function verificar() {

    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}

verificar();

// 1. Dara salida 4, 2, 3
// 2. ReferenceError: a is not defined
// 3. El código presenta varios errores relacionados con el alcance de las variables (scope) declaradas con const, let y var.


const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 1. Dara salida 30
// 2. Dio salida a 29 
// 3. Como el objeto datos está congelado, datos.edad sigue siendo 29.

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

// 1. Dara salida [1, 2, 3] ; [1, 2, 3, 4]
// 2. [ 1, 2, 3 ] ; [ 1, 2, 3, 4 ]
// 3. El metodo .concat combina arrays, devolviendo un nuevo array sin modificar los arrays originales.

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda, tercera] = frutas;
console.log(primera);
console.log(segunda);
console.log(tercera);

// 1. La pantalla imprimira, [manzana, naranja]
// 2. manzana, naranja
// 3. Lo que sucedio fue que el se guardo manzana en 'primera' ; naranja en 'segunda' y pera en 'tercera'.

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}

// 1. 0, 1, 0, 1, 0, 1
// 2. 0, 1, 0, 1, 0, 1
// 3. Lo que sucede es que cuando termina el bucle de abajo vuelve a arriba y hasta llegar a 2 < 3 no para el bucle y sigue recorriendo.

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const combinado = { ...objeto1, ...objeto2 };
console.log(combinado);

// 1. Dara salida a {a: 1, b: 3, c: 4}
// 2. { a: 1, b: 3, c: 4 }
// 3. 

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

// 1. Dara salida a [1, 2, 3, 3, 4, 5]
// 2. [ 1, 2, 3, 3, 4, 5 ]
// 3. No se sobreescriben los datos en los arrays.


function demostracion() {

    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}

demostracion();


// 1. Imprimira nombre: Luis, edad: 25
// 2. Luis, 25
// 3. Imprime 'Luis' porque la redeclaración con 'var' sobrescribe la variable global.
//    Imprime 25 porque la variable 'edad' local dentro del if no afecta a la variable externa