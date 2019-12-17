// Autentificação Usuário;
const express = require('express');
const bcrypt = require('bcryptjs');
const router  = express.Router();
const User = require('../models/UserDoadorSchema');
const jwt = require('jsonwebtoken');
const authsegredo = "MIICWwIBAAKBgG9+B8F1mOMREHIRmsZRJsynXwmI90H38qOssTLhl0/fxWvsrg54EeGCvFAfFK/SwRJ60NmrVOFusyJsf7youWNKM9mm2Nol7V4Ezmmau5G0NVilgGv3c/VX24z/LchGssmoGkCzJGcXJHUnadltjC8CgCn5PKZ0X5iNYFW19nYhAgMBAAECgYAJuPDOMwYRDwTjHZvknWEHybSk7Te6nfefxEhzim6afYYGwk3vXxMYGkF3ry4rovJJPUKHKMSvH+spHlMJTaFU49kByehKZzOEufKWCgIl1EZczyqKZAZxxWhDbq8pusNUUv2bhPIOfe7yx3fbr0TKZhZDRnoBM3gIF2ixkGDbDQJBANjhijJKNXDTVZE0BbppMzzavc68sqZcm9fG+2+Nir6NhaM++e4dpdGoGbq/S7wOIhjuqed3soqo1aGbf+47JQ8CQQCDmi1H8DyJ1XS+WdeNtmb1TqQWck65vQIoaolGw3mau4wItkDgdaV0XaQbbOjYIPAR/PIgrGAGgZwy6XplepHPAkBSfndyaYeqQrhpYsBLB3jVzN4lpODPJqqgiK9a3xvHH02Vqn6mc+B+vtIKlnjYLwgJM76srHrdAxs/PUaL9zNBAkEAgCeHqOJdUaw4P5Wlvy69HG00hVdTKrTQgSMeA3cf2HqCZ4lzrCFkuejmgn6QUMfigOHdt8ukxzE4Nqv+sQunKQJAc1pywtl8Jbl/Jko5cJICiL3PSd/IXE1L2ZxV1QlWJNOBiSZ51qIkn6+uTV3Unwd/CA7V7OGQxJKSNdtUDul2Ww=="
//------------------------------------------------
// token
function geradorToken(params = {}) {

    return jwt.sign(params, authsegredo, {
      expiresIn: 86400,
    });
  }
//------------------------------------------------
//ROTA Para Cadastro do Doador do Gato => /doador/register
router.post('/cadastro', async (req, res) => {
    const { email } = req.body;
    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: ' Usuário Doador ja existe!' });

      const user = await User.create(req.body);

      user.senha = undefined;

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao Registrar Doador!' });
    }
  });
//
//------------------------------------------------
// autenticação ROTA  para Login =>  /doador/login
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select('+senha');

    if (!user)
      return res.status(400).send({ error: 'Usuário não existe!' });

    if (!await bcrypt.compare(senha, user.senha))
      return res.status(400).send({ error: 'Senha inválida!' });

    user.senha = undefined;

    res.send({ user,  token: geradorToken({ id: user.id })
      });
  });
//------------------------------------------------
module.exports = app => app.use('/doacao', router);



