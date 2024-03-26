const { Usuario, Documento, Categoria } = require('../models');

/**
 * Usuarios
 */
const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo ${ correo } ya está registrado`);
    }
}


/**
 * Categorias
 */
const existeCategoriaPorId = async( id ) => {

    // Verificar si la categoria existe
    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id ${ id } no existe`);
    }
}


/**
 * Documentos
 */

const documentoExiste = async( num_folio  ) => {

    // Verificar si el documento existe
    const existeDocumento = await Documento.findOne({ num_folio })

    if ( existeDocumento ) {
        throw new Error(`El folio ${ num_folio } ya está registrado`);
    }
}


const existeDocumentoPorFolio = async  ( num_folio ) => {
    const existeDocumento = await Documento.findOne({ num_folio });
    
    if (!existeDocumento) {
        throw new Error(`El folio ${num_folio} no existe`);
    }
}


module.exports = {
    emailExiste,
    existeCategoriaPorId,
    documentoExiste,
    existeDocumentoPorFolio,
}

