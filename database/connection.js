//Importando a biblioteca Sequelize.

const Sequelize = require('sequelize')

//Configuração para a conexão.
const conn = new Sequelize('lista', 'root', 'Aa40028922', {
    host: 'localhost',
    dialect: 'mysql'

})

//Exportar a conexão criada (conn) para ser utilizada.
module.exports = conn 