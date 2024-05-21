//RESUELVE LOS EJERCICIOS AQUÍ
//1.- Dado el objeto **empleados**, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
//const ana = empleados[1];
const {luis, ana, andrea} = empleados;
console.log(ana);

//2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com
const {email: emailLuis} = luis;
console.log(emailLuis);

//3.- Usa destructuración para cambiar los valores de a y b;
/* Inicialmente
let a = 5;
let b = 3;

 Al final
let a = 3;
let b = 5;
*/
const [a, b] = [3, 5];
console.log(a, b);

//4.- Dado el objeto **HIGH_TEMPERATURES**
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
/*Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas
en las variables maximaHoy y maximaManana
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/
const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES
console.log(maximaHoy);
console.log(maximaManana);
/*5.- Escribe una función llamada
 **sumEveryOther** que pueda recibir cualquier cantidad de números y devuelva 
 la suma de todos los demás argumentos.
 sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
*/
function sumEveryOther(...num){
    let suma = 0;
    for (let i = 0; i < num.length; i++){
        suma += num[i];
    }
    return suma;
};
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

/*6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier 
número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
addOnlyNums(1, "perro", 2, 4); //7
*/
function addOnlyNums(...cosas){
    let suma = 0;
    cosas.forEach((e) => {
        if (Number.isFinite(e)){ //.isFinite(), retorna true si es un numero finito ya sea int o number.
            suma += e
        }
    }
    )
    return suma
};
console.log(addOnlyNums(1, "perro", 2, 4));

/*7.- Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos 
y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
*/
function countTheArgs (...args){
    return args.length;
}
console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

/*8.- Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos 
y devuelva solo un array que combine los dos (usando spread operator).
*/
function combineTwoArrays(arr1, arr2){
    let combineArr =[...arr1, ...arr2];
    return combineArr;
};
let lista1 =[1, 2, 3, 4, 5];
let lista2 = ["azul", "rojo", "amarillo", "verde"]
console.log(combineTwoArrays(lista1, lista2));

/*9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y 
devuelva un array de elementos únicos, sin repetidos.
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
*/
function onlyUniques(...elements){
    let uniques = [];
    for (let i = 0; i < elements.length; i++){
        elements.indexOf(elements[i]) == i ? uniques.push(elements[i]) : false 
    } // .indexOf() devuelve la posicion del primer elemento igual al parametro. si coincide con el indice, no está repetido. 
    return uniques;
};
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

/*10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como 
argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
*/
function combineAllArrays(...listas){
    let listaFinal = [];
    listas.forEach((e)=>{
        listaFinal = listaFinal.concat(e);
    })
    return listaFinal;
}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

/*11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos, los eleve al 
cuadrado y devuelva la suma de todos los valores cuadrados.
*/ //NO TERMINADO
function sumAndSquare(...numeros){
    let numerosCuadrado = [];
    let suma = 0;
    numeros.forEach ((e)=>{
        let numCuadrado = e * e;
        numerosCuadrado.push(numCuadrado);
    })
    for (let i = 0; i < numerosCuadrado.length; i++){
        suma += numerosCuadrado[i];
    }
    return suma;// usar .reduce!
}
console.log(sumAndSquare(2, 3, 5));