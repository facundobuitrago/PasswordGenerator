let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let nivelDeSeguridad = document.getElementById('nivelDeSeguridad');
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let password = '';
    let numeroDigitado = parseInt(cantidad.value);
     
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
        password += caracterAleatorio;
    }
    console.log("La contraseña es " + password);
    contrasena.value = password;

    evaluarSeguridad(password);
}

function limpiar(){
    contrasena.value = "";
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

    nivelDeSeguridad.textContent = seguridad;
}


botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);
