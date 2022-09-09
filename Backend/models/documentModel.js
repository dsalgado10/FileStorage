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
        enum: ['Empresa', 'Empresa 2']
    },
    description: {
        type: String,
        required: [true, 'Porfavor ingrese una descripción del documento'],
    },
    file: {
        type: String,
        require: true
    }
}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model('Document', documentSchema);

