const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');

const { 
    obtenerDocumentos,
    obtenerDocumento,
    crearDocumento,
    actualizarDocumento,
    borrarDocumento } = require('../controllers/documentos');

const { existeCategoriaPorId, documentoExiste, existeDocumentoPorFolio  } = require('../helpers/db-validators');

const router = Router();

// Obtener todas los documentos
router.get('/', validarJWT, obtenerDocumentos);

// Obtener un documento por folio
router.get('/:num_folio', [
    validarJWT,
    check('num_folio', 'El folio es obligatorio').not().isEmpty(),
    check('num_folio').custom( existeDocumentoPorFolio ),
    validarCampos
], obtenerDocumento);

// Crear documento
router.post('/', [
    validarJWT,
    check('num_folio', 'El folio es obligatorio').not().isEmpty(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
], crearDocumento);

// Actualizar documento
router.put('/:num_folio', [
    validarJWT,
    check('num_folio').custom( existeDocumentoPorFolio ),
    validarCampos
], actualizarDocumento);

// Borrar documento
router.delete('/:num_folio', [
    validarJWT,
    check('num_folio', 'El folio es obligatorio').not().isEmpty(),
    check('num_folio').custom( existeDocumentoPorFolio ),
    validarCampos
], borrarDocumento);

module.exports = router;