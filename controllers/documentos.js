const { response } = require('express');
const { Documento } = require('../models');

const obtenerDocumentos = async (req, res = response) => {

    const usuarioID = req.usuario._id;
    const categoria = req.params.categoria;

    const query = { estado: true, usuario: usuarioID };

    if (categoria) {
        query.categoria = categoria;
    }

    const [total, documentos] = await Promise.all([
        Documento.countDocuments(query),
        Documento.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
    ]);

    res.json({
        total,
        documentos
    });
}


const obtenerDocumento = async (req, res = response) => {
    const { num_folio } = req.query;
    const documento = await Documento.findOne( num_folio )
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre');

    res.json({
        documento
    });
}

const crearDocumento = async (req, res = response) => {

    const { estado, usuario, ...body } = req.body;
    const usuarioID = req.usuario._id;

    const documentoDB = await Documento.findOne({ num_folio: body.num_folio});

    if (documentoDB) {
        return res.status(400).json({
            msg: `El folio ${documentoDB.num_folio} ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        usuario: usuarioID
    }

    const documento = new Documento(data);

    // Guardar en BD

    const nuevoDocumento = await documento.save();
    await nuevoDocumento
    .populate('usuario', 'nombre')
    .populate('categoria', 'nombre')
    .execPopulate();

    res.status(201).json({
        nuevoDocumento
    });

}

const actualizarDocumento = async (req, res = response) => {
    const { num_folio } = req.params;
    const { estado, usuario,  ...data } = req.body;

    data.usuario = req.usuario._id;

    const documento = await Documento.findOneAndUpdate( num_folio, data , { new: true})

    await documento
    .populate('usuario', 'nombre')
    .populate('categoria', 'nombre')
    .execPopulate();

    res.json({
        documento
    });
}

const borrarDocumento = async (req, res = response) => {
    const { num_folio } = req.params;

    const documentoBorrado = await Documento.findOneAndDelete({num_folio});

    res.json({
        documentoBorrado
    });

}


module.exports = {
    obtenerDocumentos,
    obtenerDocumento,
    crearDocumento,
    actualizarDocumento,
    borrarDocumento
}


