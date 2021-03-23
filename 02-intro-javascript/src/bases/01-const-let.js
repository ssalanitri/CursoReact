//Declaracion de variables y constantes en js.

console.log("Hola mundo");

//NO usar var. Vamos a usr const y let

const nombre = "Sergio";
const apellido = "Salanitri";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//let es para usar variables de scope

if(true){
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);
