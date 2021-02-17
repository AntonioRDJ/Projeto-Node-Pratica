/**
 * src/app.js
 * Arquivo responsável pela configuração da aplicação.
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Rotas
const index = require('./routes/routes');
const productRoute = require('./routes/productRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

module.exports = app;
