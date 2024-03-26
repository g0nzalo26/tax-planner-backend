// Modelo de "Documento" para la base de datos

const { Schema, model } = require('mongoose');

const DocumentoSchema = Schema({
    num_folio: {
        type: String,
        required: [true, 'El número de folio es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    },
    cliente: {
        type: String,
        required: [true, 'El nombre del cliente / proveedor es obligatorio']
    },
    monto: {
        type: Number,
        required: [true, 'El monto es obligatorio'],
    },
    descripcion : {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
})

DocumentoSchema.methods.toJSON = function() {
    const { __v, _id, ...data } = this.toObject();
    return data;
}

module.exports = model( 'Documento', DocumentoSchema );