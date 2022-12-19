const express = require('express');
const passport = require('passport');
const AuthService = require('./../services/auth.service');

const router = express.Router();
const service = new AuthService();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
});

//creando endpoint nuevo para la creacion del password
//aqui debemos tener la capa de validacion de datos, por ahora no la vamos a poner pero es muy muy importante
router.post('/change-password',
  async (req, res, next) => {
    try {
      //en este caso que vamos a recibir? va a ser en una peticion tipo post, y en el body vamos a obtener el token y la nueva contraseña
      //aqui entonces podriamos generar un schema en Joi para ver que el password cumpla unos requisitos y que el token tambien cumpla por ejemplo que sea alfanumerico etc
      const { token, newPassword } = req.body;
      //aqui usamos nuestro metodo de changePassword creado en auth.service, y le enviamos el token y el newPassword
      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
});
module.exports = router;
