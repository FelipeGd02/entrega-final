// Obtener los usuarios registrados del localStorage
export const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem('user');
    if (!usuarios) {
        return [];
    }
    return JSON.parse(usuarios);
};

// Obtener el usuario activo desde el localStorage
export const obtenerUsuarioActivo = () => {
    const usuarioActivo = JSON.parse(localStorage.getItem('user-active'));
    return usuarioActivo || null;  // Si no hay usuario activo, retorna null
};

// Función para cerrar sesión y eliminar el usuario activo del localStorage
export const logout = () => {
    localStorage.removeItem('user-active');  // Eliminar el usuario activo del localStorage
};
