
function validarNombre(nombre) {
    // debugger; // Inspecciona el valor de 'nombre'
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre) && nombre.trim() !== "";
}

function validarCorreo(correo) {
    // debugger; // Inspecciona el valor de 'correo'
    if (!correo.includes("@")) {
        return false;
    } else {
        return true;
    }
}

function validarTelefono(telefono) {
    // debugger; // Inspecciona el valor de 'telefono'
    const regex = /^\d{7,15}$/;
    return regex.test(telefono);
}


function pedirDato(mensaje, funcionValidar) {
    let dato;
    do {
        dato = prompt(mensaje); // Pedir el dato al usuario
        if (dato === null) { 
            // Si el usuario presiona "Cancelar", salimos de la función
            alert("Operación cancelada por el usuario.");
            return null; // Retornamos null para indicar que se canceló
        }
        if (!funcionValidar(dato)) {
            alert("El dato ingresado no es válido. Por favor, inténtalo de nuevo.");
        }
    } while (!funcionValidar(dato));
    return dato; // Retornar el dato válido
}

// Seleccionar el botón y agregar el evento
const botonReserva = document.getElementById("reserva");
botonReserva.addEventListener("click", function () {
    // try {
    //     const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
    //     if (nombre === null) return; // Si se canceló, salimos de la función

    //     const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
    //     if (correo === null) return; // Si se canceló, salimos de la función

    //     const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);
    //     if (telefono === null) return; // Si se canceló, salimos de la función

    //     // Mostrar los datos si todo es válido
    //     console.log("Nombre válido:", nombre);
    //     console.log("Correo válido:", correo);
    //     console.log("Teléfono válido:", telefono);

    //     alert(`Datos válidos:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
    // } catch (error) {
    //     console.error("Error al manejar la reserva:", error);
    //     alert("Ocurrió un problema al procesar la reserva.");
    // }
    const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
    if (nombre === null) return; // Si se canceló, salimos de la función

    const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
    if (correo === null) return; // Si se canceló, salimos de la función

    const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);
    if (telefono === null) return; // Si se canceló, salimos de la función

    // Mostrar los datos si todo es válido
    console.log("Nombre válido:", nombre);
    console.log("Correo válido:", correo);
    console.log("Teléfono válido:", telefono);

    alert(`Datos válidos:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
});
