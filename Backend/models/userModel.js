const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Porfavor agregar un nombre']
    },
    email: {
        type: String,
        required: [true, 'Porfavor agregar un correo'],
        unique: true
    },
    employeeId: {
        type: String,
        required: [true, 'Porfavor ingrese un cóodigo de empleado'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Porfavor agregar una contraseña']
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    }
}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model('User', userSchema);

