//Arreglos

//No se recomiendo hacerlo de esta manera
//Excepto se querramos un arreglo de tamanio fijo
const arregloFijo = new Array(100);
//Pero de todas formas se pueda agrandar con
arregloFijo.push(1);
console.log(arregloFijo);


const arreglo = [1,2,3,4]
// const arreglo = new Array();
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);

//Tampoco se recomiento usar push porque
//modifica el Array original

//Com agregar un nuevo elemento sin usar push
//Sol -> Operador Spread  (...array)

let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(number){
    return number*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);