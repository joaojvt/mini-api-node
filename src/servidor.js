const port = 3003

const express = require('express')
const app = express()
const db = require('./bancoDedados.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
    res.send(db.getProdutos()) //Converte para Json
})
app.get('/products/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id));
})

app.post('/products', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put('/products/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.delete('/products/:id', (req, res, next) => {
    res.send(db.excluirProdutos(req.params.id))
})

app.listen(port, () => {
    console.log(`Servidor esta executando na porta ${port}.`);
})