const registerUser = (req, res) => {
    res.send('Ruta Registro');
}

const loginUser = (req, res) => {
    res.send('Ruta Login');
}

module.exports = {
    registerUser,
    loginUser,
}