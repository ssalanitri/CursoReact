//Objetos litearales

const persona = 
    { 
        nombre : 'Tony',
        apellido : 'Stark',
        edad  : 45,
        direccion: {
            ciudad : 'NY',
            zip: 6384623,
            lat: 13.45546,
            lng: 34.4904953
        }
    }





console.log(persona.nombre);
console.log({persona : persona });

//Si el nombre de la propiedad y el valor
// tiene el mismo nombre se puede obivar el valor.
console.log({persona});
console.table({persona});

//Como hacer un clon del objeto
//ASI NO,porque se copia la referencia.
const persona2 = persona;

//Si cambio un aributo en persona2 tambien lo hara el persona.
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

//Esta es la forma correcta de clonar.
const persona3 = {...persona};

persona3.nombre = 'Zack';
console.log(persona);
console.log(persona3);


