const port = 3003

const express = require('express')
const app = express()
const db = require('./database')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', urlencodedParser, (req, res, next) => {
    res.send(db.getProducts()) //Converte para Json
})
app.get('/products/:id', urlencodedParser, (req, res, next) => {
    res.send(db.getProduct(req.params.id));
})

app.post('/products', jsonParser, (req, res, next) => {
    const product = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id',jsonParser,(req, res, next) => {
    const product = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', urlencodedParser,(req, res, next) => {
    res.send(db.deleteProducts(req.params.id))
})

app.listen(port, () => {
    console.log(`Servidor esta executando na porta ${port}.`);
})