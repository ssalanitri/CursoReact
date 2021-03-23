//Desectructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[1]);

//Que fiaca hacarlo asi!!

//Primero
const [p1] = personajes;
console.log(p1);

//Ignora el primero e imprime el segundo
const [ ,p2] = personajes;
console.log(p2);

//Ignora los dos primeros.
const [ ,,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>
{
    return ['ABC',123];

}

const arr = retornaArreglo();
const [letras, numeros] = retornaArreglo();

console.log(arr);
console.log(letras,numeros);


const usarState = (valor) => {
    return [valor,()=>{console.log('Hola ' + valor)}]
}

const arr2 = usarState('Torven');
console.log(arr2);

arr2[1]();

//Tareas
//1- El primer valor del arreglo se llamara nombre
//2- El segundo una funciona llamada setearNombre

const [nombre, setearNombre] = usarState('Sergio');

console.log(nombre);
setearNombre();

//Esta es la forma correcta de acceder a un metodo dentro de un array.
//Usar arr[1]() funciona,pero es confuso y depende de uan posicion fija.




