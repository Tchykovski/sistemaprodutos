const express = require('express');
const { use } = require('express/lib/application');
const app = express();
const conn = require('./database/connection')
const Produtos = require('./models/Produtos')
const produtosController = require('./models/produtoscontroller')



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

conn.authenticate()
    .then(() => {
        console.info('Banco Conectado!!!')
    })
    .catch((erro) => {
        console.info(erro)
    })

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', produtosController)


app.get('/cadproduto', (req, res) => {
    res.render('lista')
})



app.get('/', (req, res) => {

    Produtos.findAll(

    ).then(produtos => {
        res.render('listagem', { produtos: produtos })
    }).catch(erro => {
        console.info(erro)
    })

})


app.listen(3000, () => {
    console.log('listening on port 3000');

});
