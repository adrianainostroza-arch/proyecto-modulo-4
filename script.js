
//leccion #1: 
console.log("Iniciando aplicación de consola");
alert("Vamos a realizar algunas operaciones matemáticas");


//leccion #2: Variables, expresiones y sentencias condicionales
//entrada de datos 
let numero1 = parseFloat(prompt("Ingrese primer número"));
let numero2 = parseFloat(prompt("Ingrese segundo número"));


//operaciones matemáticas básicas (suma, resta, multiplicación, división)
const suma = sumar(numero1, numero2);
const resta = restar(numero1, numero2);
const multiplicacion = multiplicar(numero1, numero2);
const division = dividir(numero1, numero2);

//ejemplo de if
if (suma > 5) {
    console.log("La suma es mayor que 5");
}

//ejemplo de if/else
if (multiplicacion > 10) {
    console.log("La multiplicación es mayor que 10");
} else {
    console.log("La multiplicación no es mayor que 10");
}

//ejemplo de switch
switch (division) {
    case 0: {
        console.log("La division es igual a 0");
        break;
    }
    case 1: {
        console.log("La división es igual a 1");
        break;
    }
    case 2: {
        console.log("La división es igual a 2");
        break;
    }
    default: {
        console.log("La división no es igual a 0, 1 ni 2");
        break;
    }
}

//salida de datos
console.log("Primer número: " + numero1);
console.log("Segundo número: " + numero2);
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);


//leccion #3: Arreglos y ciclos
//ejemplo de ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i + 1}`);
}
//ejemplo de ciclo while
let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

//ejemplo de arreglo y recorrido con for
const listaResultados = [suma, resta, multiplicacion, division];

console.log("Recorriendo el arreglo con FOR");
for (let i = 0; i < listaResultados.length; i++) {
    console.log(`Resultado ${i + 1}: ${listaResultados[i]}`);
}

console.log("Recorriendo el arreglo con WHILE");
let indice = 0;
while (indice < listaResultados.length) {
    console.log(`Elemento en posición ${indice}: ${listaResultados[indice]}`);
    indice++;
}

//función que filtra elementos según una condición (ej: solo los positivos)
function filtrarPositivos(arreglo) {
    return arreglo.filter(function (valor) {
        return valor > 0;
    });
}

const resultadosPositivos = filtrarPositivos(listaResultados);
console.log("Resultados positivos:", resultadosPositivos);


/* ============================================================
   LECCIÓN #4: Funciones en JavaScript
   Objetivo: modularizar el código utilizando funciones.
   ============================================================ */

//una función para cada operación matemática, que recibe
//parámetros y retorna un resultado
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    // evitamos la división por cero
    if (b === 0) {
        console.log("Advertencia: no se puede dividir por 0. Se retorna 0.");
        return 0;
    }
    return a / b;
}

//función que llama a otras funciones dentro de ella, para optimizar el código
function calcularTodo(a, b) {
    return {
        suma: sumar(a, b),
        resta: restar(a, b),
        multiplicacion: multiplicar(a, b),
        division: dividir(a, b)
    };
}

//probamos la función que agrupa todas las operaciones
const resultadosAgrupados = calcularTodo(numero1, numero2);
console.log("Resultados agrupados con calcularTodo():", resultadosAgrupados);


/* ============================================================
   LECCIÓN #5: Conceptos básicos de objetos en JavaScript
   Objetivo: utilizar objetos para organizar datos de manera
   estructurada.
   ============================================================ */

//creamos un objeto con propiedades y un método
const operacionMatematica = {
    numero1: numero1,
    numero2: numero2,
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division,
    // método dentro del objeto
    mostrarResumen: function () {
        console.log(
            `Resumen -> N1: ${this.numero1}, N2: ${this.numero2}, ` +
            `Suma: ${this.suma}, Resta: ${this.resta}, ` +
            `Multiplicación: ${this.multiplicacion}, División: ${this.division}`
        );
    }
};

operacionMatematica.mostrarResumen();

//arreglo de objetos, recorrido con forEach() y map()
const historialOperaciones = [
    { tipo: "suma", valor: suma },
    { tipo: "resta", valor: resta },
    { tipo: "multiplicación", valor: multiplicacion },
    { tipo: "división", valor: division }
];

console.log("Historial con forEach");
historialOperaciones.forEach(function (operacion) {
    console.log(`Operación: ${operacion.tipo} -> Resultado: ${operacion.valor}`);
});

console.log("Historial transformado map");
const historialTexto = historialOperaciones.map(function (operacion) {
    return `${operacion.tipo.toUpperCase()}: ${operacion.valor}`;
});
console.log(historialTexto);
