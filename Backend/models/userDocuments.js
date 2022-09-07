const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Porfavor seleccione una empresa'],
        enum: ['Empresa 1', 'Empresa 2']
    },
    descripcion: {
        type: String,
        required: [true, 'Porfavor ingrese una descripción del documento'],
    },
}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model('Document', documentSchema);

