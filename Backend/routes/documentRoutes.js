const express = require('express');
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'files')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("No es un archivo PDF."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: multerFilter });
const { getDocuments, getDocument, createDocument, deleteDocument } = require('../controllers/documentController')
const { protect } = require('../middleware/authMiddleware');
router.route('/').get(protect, getDocuments).post(protect, upload.single('file'), createDocument);
router.route('/:id').get(protect, getDocument).delete(protect, deleteDocument);

module.exports = router;