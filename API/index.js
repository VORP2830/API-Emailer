const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const Email = require('./Controller/EmailController')
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(
    express.json(),
    cors(),
    bodyParser()
)

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">Bem vindo à API</h1>')
})

app.post('/enviar', Email.EmailEnviar);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})

module.exports = app;