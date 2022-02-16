const express = require('express');
const routes = require('./src/routes')
const db = require("./src/db")

const app = express();
app.use(express.json())
app.use(routes)

app.listen(3000, ()=> console.log('Rodando na porta 3000'))