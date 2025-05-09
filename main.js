// Elementos del DOM

let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let nivelDeSeguridad = document.getElementById('nivelDeSeguridad');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Generador de contraseña
function generar() {
    let longitud = parseInt(cantidad.value);

    // Validación de entrada
    if (isNaN(longitud) || longitud <= 0) {
        alert("Por favor, ingresá una cantidad válida (mayor a 0).");
        return;
    }

    let password = '';
    for (let i = 0; i < longitud; i++) {
        let caracter = caracteres[Math.floor(Math.random() * caracteres.length)];
        password += caracter;
    }

    contrasena.value = password;
    evaluarSeguridad(password);
}

function limpiar() {
    contrasena.value = "";
    nivelDeSeguridad.textContent = "Seguridad: N/A";
    nivelDeSeguridad.className = "seguridad";
}

function evaluarSeguridad(password) {
    let seguridad = "Débil";
    nivelDeSeguridad.className = "seguridad debil";

    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()]/.test(password)) {
        seguridad = "Fuerte";
        nivelDeSeguridad.className = "seguridad fuerte";
    } else if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        seguridad = "Media";
        nivelDeSeguridad.className = "seguridad media";
    }

    nivelDeSeguridad.textContent = "Seguridad: " + seguridad;
}

botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);
