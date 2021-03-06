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
router.get('/gatosId/:gatosId',authMiddleware, async(req, res) => {

        try {
        
                const bancogatos = await bancogato.findById(req.params.gatosId).populate(['bancogato']);
                console.log({bancogatos})
        
                return res.send({bancogatos,user: req.userId})
        } catch (err) {
          return res.status(400).send({ error: 'Erro ao listar gatos pelo ID' });
 }

});
//------------------------------------------------
// Atualizar informações do gato pelo id
router.put('/atualizagatoId/:atualizagatoId',authMiddleware, async(req, res) => {

        try {
                const {nomedogato,vacinado,foto, castrado,sexo,descricao,disponivelpradoacao} = req.body;
                const atualizagato = await bancogato.findByIdAndUpdate(req.params.atualizagatoId, {
                        nomedogato,
                        vacinado,
                        foto,
                        castrado,
                        sexo,
                        descricao,
                        disponivelpradoacao,
                }, { new: true });
                await atualizagato.save();
                return res.send({atualizagato});
                
             } catch (err) {
                return res.status(400).send({ err: 'erro ao atualizar gato' });
             }
});

//------------------------------------------
//Deletar gato pra adoção pelo id
router.delete('/deletegatoId/:deletegatoId',authMiddleware, async(req, res) => {

        try {
                await bancogato.findByIdAndRemove(req.params.deletegatoId);

                return res.status(200).send({message: "Gato deletado com sucesso!"});
        } catch (err) {
                return res.status(400).send({ error: 'Erro ao deletar gato pelo ID' });
        }

});
//-------------------------------------------------------------------
module.exports = app => app.use('/doacao', router);
