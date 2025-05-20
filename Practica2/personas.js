const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

const personaBuscada = personas.find(personas =>personas.nombre === "Luis");
console.log(personaBuscada);

personas.forEach((persona, index) => {
    console.log ('Nombre:', persona.nombre, 'Edad:', persona.edad)});

const sumaEdades = personas.reduce((acumulador ,persona ) => {
    return acumulador + persona.edad;
}, 0);
console.log('Suma de edades:', sumaEdades);