 //Server para impedir que o usuário entre na aplicação sem estar logado
const jwt = require('jsonwebtoken');
const authsegredo = "MIICWwIBAAKBgG9+B8F1mOMREHIRmsZRJsynXwmI90H38qOssTLhl0/fxWvsrg54EeGCvFAfFK/SwRJ60NmrVOFusyJsf7youWNKM9mm2Nol7V4Ezmmau5G0NVilgGv3c/VX24z/LchGssmoGkCzJGcXJHUnadltjC8CgCn5PKZ0X5iNYFW19nYhAgMBAAECgYAJuPDOMwYRDwTjHZvknWEHybSk7Te6nfefxEhzim6afYYGwk3vXxMYGkF3ry4rovJJPUKHKMSvH+spHlMJTaFU49kByehKZzOEufKWCgIl1EZczyqKZAZxxWhDbq8pusNUUv2bhPIOfe7yx3fbr0TKZhZDRnoBM3gIF2ixkGDbDQJBANjhijJKNXDTVZE0BbppMzzavc68sqZcm9fG+2+Nir6NhaM++e4dpdGoGbq/S7wOIhjuqed3soqo1aGbf+47JQ8CQQCDmi1H8DyJ1XS+WdeNtmb1TqQWck65vQIoaolGw3mau4wItkDgdaV0XaQbbOjYIPAR/PIgrGAGgZwy6XplepHPAkBSfndyaYeqQrhpYsBLB3jVzN4lpODPJqqgiK9a3xvHH02Vqn6mc+B+vtIKlnjYLwgJM76srHrdAxs/PUaL9zNBAkEAgCeHqOJdUaw4P5Wlvy69HG00hVdTKrTQgSMeA3cf2HqCZ4lzrCFkuejmgn6QUMfigOHdt8ukxzE4Nqv+sQunKQJAc1pywtl8Jbl/Jko5cJICiL3PSd/IXE1L2ZxV1QlWJNOBiSZ51qIkn6+uTV3Unwd/CA7V7OGQxJKSNdtUDul2Ww=="

module.exports = (req, res, next) => {
    const authHeader = req.get("authorization");

    if (!authHeader)
      return res.status(401).send({ error: 'O token não foi informado' });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
      return res.status(401).send({ error: 'Token error' });
      const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).send({ error: 'Formato do token invalido' });

    jwt.verify(token, authsegredo, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Token Inválido!' });

      req.userId = decoded.id;
      return next();
    });
  };


