//Funciones en js


// function Saludar(nombre){

//     return 'Hola ' + nombre;
// }

//Saludar = 30; //Funciona PEROOO, sobre escribe el puntero a funcion

const  Saludar = function(nombre){

    return 'Hola ' + nombre;
}

console.log(Saludar('Mark'));

//Funcion de flecha (metodos anonimos)

const saludar2 = (nombre) =>{

    return 'Hola ' + nombre;
}

console.log(saludar2('Carlos'));

const saludar3 = (nombre) =>  'Hola ' + nombre;

console.log(saludar3('Pedro'));

const saludar4 = () => "Hola mundo";
console.log(saludar4('Pedro'));

const getUser = () => {
return {
        uid : "ABC1",
        username : "L059549"
       }
}

console.log(getUser());

//Como solo tiene un return

const user = () => 
    ({
        uid : "ABC1",
        username : "LCXXXXX"
    })

console.log(user());
    

//Tarea
//1- Transformar a un funcion flecha
//2- Tiene que retornar un objeto implicito.
//3- Probar.
function getUsuarioActivo(nombre)
{
     return {
        uid : 'ABC1',
        username : nombre
     }
};

const usuarioActivo = getUsuarioActivo('Sergio');
console.log(usuarioActivo);


const getUsuarioActivo2 = (nombre) => ({uid: 'ABC66',username: nombre});


const usuarioActivo2 = getUsuarioActivo2('Gustavo');
console.log(usuarioActivo2);


