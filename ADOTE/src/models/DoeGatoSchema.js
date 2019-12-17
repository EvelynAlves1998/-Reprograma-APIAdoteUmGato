const mongoose = require('./database');
//------------------------------------------------
const bancogatoSchema = new mongoose.Schema({
    // _id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     auto: true,
    //     required: true
    // },
    nomedogato: {
        type: String,
        require: true,
    },
//------------------------------------------------
    vacinado: {
        type: String,
        required: true,
        },

//------------------------------------------------
    foto: {
        type: String,
        required: true,
    },

//------------------------------------------------
    castrado: {
        type: String,
        required: true,
    },
//----------------------------------------------
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
//------------------------------------------------
//femea ou macho
    sexo: {
        type: String,
        required: true,

        },

//------------------------------------------------
    descricao: {
        type: String,
        required: true,
    },

//-------------------------------------------------------
//colocar false se nao quiser doar mais o animal
    disponivelpradoacao: {
        type: Boolean,
        require: true,
        default: true,
    },
//-----------------------------------------------------------------------------
    createdAT:{
        type: Date,
        default: Date.now,
    },
});
//------------------------------------------------

const bancogato = mongoose.model('bancogato', bancogatoSchema);
module.exports = bancogato;



