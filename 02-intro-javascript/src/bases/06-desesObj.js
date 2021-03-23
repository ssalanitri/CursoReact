//Desectruracion de objetos
//MUY IMPORTANTE!!!
//O asignacion desectructurante.

const persona = {

    nombre:'Tony',
    edad:45,
    clave: 'IroMan',
   // rango: 'Soldado'
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Asingacion deectructurante.

//const{nombre} = persona;
//console.log(nombre);
// const{nombre:nombre2} = persona;
// console.log(nombre2);

const {edad,nombre,clave} = persona;

const retornaPersona = (usuario) =>{
    const {edad,nombre,clave} = usuario;
    console.log(edad,clave,nombre)
}

retornaPersona( persona);

//Desestructuro en el argumento.
//Ademas agrego valores por defecto.

const retornaPersona2 = ({nombre,edad,rango='Capitan'}) =>{
    console.log(nombre,edad,rango)
}

retornaPersona2( persona);


const retornaPersona3 = ({clave,nombre,edad,rango='Capitan'}) =>{
    
    return{
        nombreClave: clave,
        anio: edad
    }
}

const avenger = retornaPersona3(persona);
console.log(avenger);


//Renombro a userContext (que ya no se puede usar)
//nombre con prefijo use y set porque son reservados para React.



 const usarContext = ({clave,nombre,edad,rango='Capitan'}) =>{
    
    return{
        nombreClave: clave,
        anio: edad,
        lanlng:{
            lat:48.49023,
            lng:44.423
        }
    }
}

const avenger2 = usarContext(persona);
console.log(avenger2);

//Tarea: de usarContext extrar nombreClave y anio

const {nombreClave,anio,lanlng:{lat,lng}} = usarContext(persona);
console.log({nombreClave,anio,lat,lng});








