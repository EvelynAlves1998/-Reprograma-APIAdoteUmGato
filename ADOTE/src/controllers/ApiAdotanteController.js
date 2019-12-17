const express = require('express');
const router = express.Router();
const adotante = (require('../models/AdontanteSchema'));
const bancogato = require('../models/DoeGatoSchema');


// //------------------------------------------
//listar todos os disponiveis gatos para adoção
router.get('/listargatosdisp', async(req, res) => {

    try {
    const bancogatos = await bancogato.find()

            return res.send({bancogatos, user: req.userId})
    } catch (err) {
            return res.status(400).send({ error: 'Erro ao listar gatos disponiveis para adoção' });
    }
});

//-------------------------------------------------------
// Formulário Adotar um gato
//no iddogato, colocar o id do gato desejado
router.post('/adotargato',async (req,res) =>{

        const adotargato = new adotante(req.body)
        adotargato.save((error) => {
          if (error) {
            return res.status(500).send(error)
          }

          return res.status(201).send(adotargato)
        })
    });





module.exports = app => app.use('/adotar', router);
