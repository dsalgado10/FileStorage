const asyncHandler = require('express-async-handler');

// Registrar un nuevo usuario
// Ruta: /api/users
// Permiso: Publico
const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Incluya todos los campos')
    }
    res.send('Ruta Registro');
})

// Login de usuario
// Ruta: /api/login
// Permiso: Publico
const loginUser = asyncHandler (async (req, res) => {
    res.send('Ruta Login');
})

module.exports = {
    registerUser,
    loginUser,
}