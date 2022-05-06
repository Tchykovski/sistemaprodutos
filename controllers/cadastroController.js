//Importando o Express
const Express = require('express')
const router = Express.Router()
const Cadastro = require('../models/Cadastro')



//Then = Se der certo
//Catch = Se der errado


router.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

router.post('/cadastro/salvar', (req, res) => {
    Cadastro.create({
        nome: req.body.name,
        email: req.body.email,
        senha: req.body.password
    }).then(() => {
        res.render('pag-inicial', {
            nome: req.body.name
        })
    }).catch(erro => {
        console.info(erro)
    })
})


module.exports = router     
