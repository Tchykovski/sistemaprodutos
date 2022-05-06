const Sequelize = require('sequelize')
const conn = require('../database/connection')

//Construção da tabela

const Listas = conn.define('listas', {
    nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco_produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtd_produto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    marca_produto: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

//Forçando a tabela a ser criada no Banco de Dados

Listas.sync({ force: true })
module.exports = Listas

