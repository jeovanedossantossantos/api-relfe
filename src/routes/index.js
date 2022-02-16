const express = require('express')
const routes = express.Router();
const controllerMatriculados = require('../controller/controllerMatriculados');
const controllerUsuarios = require("../controller/controllerUsuario");
const auth = require('../middlewares/auth')
const UsusriosCreateValidations = require("../validations/usuarios/create")
const authLoginValidations = require("../validations/auth/login")
const authController = require("../controller/authController")
// const flash = require("connect-flash")
// app.use(flash())

// app.use((req, res, next) => {
//     // console.log("Acessando o Middleware")
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg = req.flash('error_msg')

//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
//     app.use(cors())
//     next();
// })


//  Cadastra usuario
routes.post("/usuarios",controllerUsuarios.registro)
// Faz o login no sistema
routes.post("/login", authLoginValidations ,authController.login)
// Buscando todos os matriculados no banco
routes.get("/matriculados",auth,controllerMatriculados.listaMatriculados)
// Busca um matriculado expecifico
routes.get("/matriculado/:id",auth, controllerMatriculados.buscarUm)
// Matricula
routes.post("/matricular",auth, controllerMatriculados.cadastra)
// Atualiza os dados de um matriculado 
routes.put("/atualizar/:id",auth,controllerMatriculados.atulizar)

module.exports = routes;
