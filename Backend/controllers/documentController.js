const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Document = require('../models/documentModel');

// Mostrar documentos de usuario
// Ruta: GET /api/documents
// Permiso: Privado
const getDocuments = asyncHandler(async (req, res) => {
    //Obtener usuario utilizando el id en el JWT token
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('Usuario no encontrado')
    }
    const documents = await Document.find({ user: req.user.id });
    res.status(200).json(documents);
})

// Crear nuevo documento
// Ruta: POST /api/documents
// Permiso: Privado
const createDocument = asyncHandler(async (req, res) => {
    const { product, description, category } = req.body;
    if (!product || !description || !category || !req.file) {
        res.status(400)
        throw new Error('Porfavor agregar un documento y descripción')
    }
    //Obtener usuario utilizando el id en el JWT token
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401)
        throw new Error('Usuario no encontrado')
    }
    const document = await Document.create({
        product,
        category,
        description,
        user: req.user.id,
        file: req.file.originalname,
    })
    res.status(201).json(document)
})

module.exports = {
    getDocuments,
    createDocument
}