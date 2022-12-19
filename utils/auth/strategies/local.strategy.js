const { Strategy } = require('passport-local');
//ya no requeririamos aqui a bomm ni a bcrypt
// const boom = require('@hapi/boom');
// const bcrypt = require ('bcrypt');
//ahora aqui vamos a utilizar es el auth.service.js
const AuthService = require('./../../../services/auth.service')
const service = new AuthService();


const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  async (email, password, done)=>{
    try{
      //asi que aqui a dentro ya no tendriamos que tener toda la logica, solo utilizamos el servicio de auth.service
      const user = await service.getUser(email, password);
      //si viene lo devolvemos, si hay algun error entonces lanzamos el error (eso lo hace el auth.service)
      done(null, user);
    }catch (error){
      done(error, false);
    }
});

module.exports = LocalStrategy;
