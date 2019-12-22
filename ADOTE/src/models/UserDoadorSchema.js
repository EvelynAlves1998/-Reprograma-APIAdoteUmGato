// Cadastro De Usuário Doador
const bcrypt = require('bcryptjs');
const mongoose = require('./database');

//------------------------------------------------
const UserSchema = new mongoose.Schema({
    nome: {
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
    senha: {
        type: String,
        required: true,
        select: false,
    },
//-------------------------------------------------
//     gatos: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'bancogato',
//         required: true,

//     }],

//------------------------------------------------
    createdAT:{
        type: Date,
        default: Date.now,

    }
});
//---------------------------------------------------

//HASH encriptar a senha
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});
const User = mongoose.model('User', UserSchema);
module.exports = User;













