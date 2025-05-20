const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];
// Filtrar el nombre de Luis 
const personaBuscada = personas.find(personas =>personas.nombre === "Luis");
console.log(personaBuscada);
// Filtrar el nombre y edad de cada persona
personas.forEach((persona, index) => {
    console.log ('Nombre:', persona.nombre, 'Edad:', persona.edad)});
// Sumar las edades de todas las personas
// Usando reduce
const sumaEdades = personas.reduce((acumulador ,persona ) => {
    return acumulador + persona.edad;
}, 0);
console.log('Suma de edades:', sumaEdades);