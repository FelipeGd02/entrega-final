import { obtenerUsuarios } from '../AppFunctions/utils.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const frmLogin = document.getElementById('formulario');
const usuariosKey = 'user';
const usuarioActivoKey = 'user-active';
const usuarios = obtenerUsuarios();

frmLogin.addEventListener("submit", loginUser);

function loginUser(event){
    event.preventDefault();
    
    const getLocal = localStorage.getItem(usuariosKey);
    const validateUser = JSON.parse(getLocal);
    
    if (!validateUser){
        alert('No hay usuarios registrados');
        return;
    }

    if (email.value === '' || password.value === ''){
        alert('Por favor, llene todos los campos');
    }
    else if (!validateUser.find(user => user.email === email.value)){
        alert('El usuario no está registrado');
    }
    else if (validateUser.find(user => user.email === email.value).password !== password.value){
        alert('Contraseña incorrecta');
    }  
    else {
        const user = validateUser.find(user => user.email === email.value && user.password === password.value);
        localStorage.setItem(usuarioActivoKey, JSON.stringify(user));  // Almacena el usuario activo como objeto
        alert('Bienvenido');
        window.location.href = './LandingPage.html'; 
    }
};
