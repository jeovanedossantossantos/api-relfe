const express = require('express')
const routes = express.Router();
const controllerMatriculados = require('../controller/controllerMatriculados')

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

// Busaca todos os matriculados no banco
routes.get("/matriculados",controllerMatriculados.listaMatriculados)
// Busca um matriculado expecifico
routes.get("/matriculado/:id", controllerMatriculados.buscarUm)
// Matricula
routes.post("/matricular", controllerMatriculados.cadastra)
// Atualiza os dados de um matriculado 
routes.put("/atualizar/:id")
//  Verifica o usuario
routes.post("/usuarios")
// Faz o login no sistema
routes.post("/login")

module.exports = routes;
