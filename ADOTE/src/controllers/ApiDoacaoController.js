const express = require('express');
const router = express.Router();
const bancogato = require('../models/DoeGatoSchema');
const adotante = (require('../models/AdontanteSchema'));
const authMiddleware = require('../middlewares/auth');

//------------------------------------------
//usuario
router.get('/',async(req,res) =>{
        res.send({user: req.userId})
});
//-----------------------------------------------
//Doar gato
router.post('/doargato',authMiddleware, async(req, res) => {

        try {
                const novogato = await bancogato.create(req.body);
                return res.send({novogato,user: req.userId});

        } catch (err) {
                return res.status(400).send({ error: 'Falha ao Registrar gato para adoção!' });
              }
});

//--------------------------------------------
// Lista todos os gatos colocados para adoção
router.get('/listargatos',authMiddleware, async(req, res) => {

        try {
        const bancogatos = await bancogato.find()

                return res.send({bancogatos, user: req.userId})
        } catch (err) {
                return res.status(400).send({ error: 'Erro ao listar gatos disponiveis para adoção' });
        }
 });
//-------------------------------------------------------------------------------------------
// listar adotantes interessados 
router.get('/listaradotantes',authMiddleware, async(req, res) => {

        try {
        const adotantes = await adotante.find()

                return res.send({adotantes})
        } catch (err) {
                return res.status(400).send({ error: 'Erro ao listar adotantes disponiveis' });
        }
    });
//--------------------------------------------
//Listar gatos pelo id
router.get('/:gatosId',authMiddleware, async(req, res) => {


try {
const bancogatos = await bancogato.findById(req.params.gatosId).populate(['bancogato']);
        console.log({bancogatos})
        return res.send({bancogatos})
} catch (err) {
          return res.status(400).send({ error: 'Erro ao listar gatos pelo ID' });
 }

});
//------------------------------------------------
// Atualizar informações do gato
router.patch('/atualizagatoid/:atualizagatoid',authMiddleware, async(req, res) => {
        const id = req.params.id
        const gatoatualizar = req.body;
        const options = { new: true }
        bancogato.findByIdAndUpdate(req.params.gatosId, (
                id,
                gatoatualizar,
                options,
                nomedogato,
                vacinado,
                castrado,
                sexo,
                descricao,
                (err,gatoatualizar) => {
                if(err){
                        return res.status(500).send({ error: 'Erro Ao atualizar as informações do gato' });
                }
                if(gatoatualizar){
                        return res.status(200).send(gatoatualizar)
                }
        })

        )
});

//------------------------------------------
//Deletar gato pra adoção
router.delete('/deletegatoid/:deletagatoid',authMiddleware, async(req, res) => {

        try {
                const bancogato = await bancogato.findbyIdAndRemove(req.params.gatosId);

                return res.send({mensagem: "Gato deletado com sucesso! "});
        } catch (err) {
                return res.status(400).send({ error: 'Erro ao deletar gato pelo id!' });
        }
});
//-------------------------------------------------------------------
module.exports = app => app.use('/doacao', router);
