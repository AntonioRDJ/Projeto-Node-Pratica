/** 
 * config/database.js
 * Arquivo responsável pelas 'connectionStrings' da aplicação: PostgreSQL.
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL
});

pool.on('connect', async () => {
    console.log('Base de Dados conectado com sucesso!');

});



module.exports = {
    query: (text, params) => pool.query(text, params)
};