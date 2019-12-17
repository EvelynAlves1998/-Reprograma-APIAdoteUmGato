const mongoose = require('./database');
//------------------------------------------------
const AdotanteSchema = new mongoose.Schema({
    nomeadotante: {
        type: String,
        require: true,
    },

//------------------------------------------------
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

//------------------------------------------------
    telefone: {
        type: String,
        required: true,
    },
    //---------------------------------------------
    iddogato: {
        type: String,
        required: true,
    },

//------------------------------------------------

    createdAT:{
        type: Date,
        default: Date.now,

    }
});

//------------------------------------------------

const Adotante = mongoose.model('Adotante', AdotanteSchema);
module.exports = Adotante;













