const express = require('express');
const app = express();
const conn = require('./database/connection')
const Cadastros = require('./models/Cadastro')
const cadastroController = require('./controllers/cadastroController')
const Listas = require('./models/Lista')
const listaController = require('./controllers/listaController')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//autenticando o banco de dados
conn.authenticate()
    .then(() => {
        console.info('Banco Conectado!!!')
    })
    .catch((erro) => {
        console.info(erro)
    })


//Configurando a engine de views

app.use(express.static('public'));
app.set('view engine', 'ejs');


//rota index

app.get('/', (req, res) => {
    res.render('index')
})
//rota sobre
app.get('/sobre', (req, res) => {
    res.render('sobre')
})


app.use('/', cadastroController)
app.use('/', listaController)



app.get('/lista', (req, res) => {
    Listas.findAll().then(produtos => {
        res.render('lista', {
            produtos: produtos
        })
    })
})

//rota login
app.get('/login', (req, res) => {
    res.render('login')
})



app.listen(3000, () => {
    console.log('listening on port 3000');

});
