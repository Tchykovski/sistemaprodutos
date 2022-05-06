const Sequelize = require('sequelize')
const conn = require('../database/connection')

//Construção da tabela

const Cadastros = conn.define('cadastro', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

//Forçando a tabela a ser criada no Banco de Dados

Cadastros.sync({ force: true })
module.exports = Cadastros

