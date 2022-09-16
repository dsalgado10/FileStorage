const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Document = require('../models/documentModel');

// Get documentos de usuario
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

// @Get documento de usuario
// @Tura: GET /api/documents/:id
// @Permiso: Privado
const getDocument = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('Usuario no encontrado')
    }
    const document = await Document.findById(req.params.id)
    if (!document) {
        res.status(404)
        throw new Error('Documento no encontrado')
    }
    if (document.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const archivo = await Document.find({});
    //console.log(archivo[0].file)
    //res.download(archivo[0].file); // video[0].file.path is the absolute path to the file

    //console.log("DOCUMENT: ", document);
    res.status(200).json(document)
})

// @Delete document
// @Ruta: /api/documents/:id
// @Permiso:  Privado
const deleteDocument = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User no encontrado')
    }

    const document = await Document.findById(req.params.id)

    if (!document) {
        res.status(404)
        throw new Error('Documento no encontrado')
    }

    if (document.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    await document.remove()

    res.status(200).json({ success: true })
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
    createDocument,
    getDocument,
    deleteDocument
}