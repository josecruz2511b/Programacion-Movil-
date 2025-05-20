let nombre = "Armando";
const edad = 25;

nombre = "Juan";

const saludo = `Hola ${nombre}, tienes ${edad} años.`;
console.log(saludo);



const saludoPersonalizado = (nombre, edad) => { 
    return `Hola ${nombre}, tienes ${edad} años.`;
}
console.log(saludoPersonalizado("Armando", 25));