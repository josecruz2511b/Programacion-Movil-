const persona = {
    nombre : "Jose Guadalupe",
    edad: 25,
    direccion: {
        ciudad: "Guadalajara",
        pais: "Mexico"
    }
};
// Desestructuración de objetos
// const { nombre, edad } = persona;
const { nombre, edad, direccion: { ciudad, pais } } = persona;
console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}, ${pais}.`);
