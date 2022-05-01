

const Express = require('express')
const router = Express.Router()
const Produtos = require('./Produtos')


router.post('/salvar', (req, res) => {
    Produtos.create({
        nome: req.body.nome_produto,
        preco: req.body.preco_produto
    }).then(() => {
        res.redirect('/')
    }).catch(erro => {
        console.info(erro)
    })
})


module.exports = router