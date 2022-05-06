//Importando o Express
const Express = require('express')
const router = Express.Router()
const Lista = require('../models/Lista')



//Then = Se der certo
//Catch = Se der errado


router.get('/perfil/cadastrar/produto', (req, res) => {
    res.render('cadastro_produto')
})

router.post('/perfil/salvarproduto', (req, res) => {
    Lista.create({
        nome_produto: req.body.nome_produto,
        preco_produto: req.body.preco_produto,
        qtd_produto: req.body.qtd_produto,
        marca_produto: req.body.marca_produto


    }).then(() => {
        res.redirect('/lista')
    }).catch(erro => {
        console.info(erro)
    })
})



module.exports = router     
