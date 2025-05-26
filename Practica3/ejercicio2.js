function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin") {
                resolve("Usuario verificado");
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

verificarUsuario("admin")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    }); 

verificarUsuario("invitado")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });