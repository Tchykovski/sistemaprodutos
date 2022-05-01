const Sequelize = require('sequelize');
const conn = require('../database/connection');

const Produtos = conn.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

// Produtos.sync({ force: true }).then(() => {
//     console.log('Tabela criada com sucesso');
// });

module.exports = Produtos;