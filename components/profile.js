import { obtenerUsuarioActivo, logout } from '../AppFunctions/utils.js';

document.addEventListener("DOMContentLoaded", () => {
    // Obtener el usuario activo desde localStorage
    const usuarioActivo = obtenerUsuarioActivo();
    
    if (usuarioActivo) {
        // Mostrar los datos del usuario en los campos editables
        document.getElementById('user-name').value = usuarioActivo.name;
        document.getElementById('user-email').value = usuarioActivo.email;
        document.getElementById('user-age').value = usuarioActivo.age;
        document.getElementById('user-profession').value = usuarioActivo.profession;
    } else {
        // Si no hay usuario activo, redirigir al login
        window.location.href = './Login.html';
    }

    // Manejar el evento de logout
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener("click", () => {
        logout(); // Eliminar usuario activo del localStorage
        window.location.href = './register.html';  // Redirigir al login después de cerrar sesión
    });

    // Manejar el evento de guardar cambios
    const saveBtn = document.getElementById('save-btn');
    saveBtn.addEventListener("click", () => {
        const updatedUser = {
            ...usuarioActivo,
            name: document.getElementById('user-name').value,
            email: document.getElementById('user-email').value,
            age: document.getElementById('user-age').value,
            profession: document.getElementById('user-profession').value
        };

        // Guardar el usuario actualizado en localStorage
        localStorage.setItem('user-active', JSON.stringify(updatedUser));

        // Informar al usuario que los cambios fueron guardados
        alert('Changes saved successfully!');
    });
});
