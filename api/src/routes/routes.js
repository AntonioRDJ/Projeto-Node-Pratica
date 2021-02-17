/**
 * routes/route.js
 * Arquivo responsável pelas rotas da api.
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    try{
        res.status(200).send({
            success: 'true',
            message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL!',
            version: '1.0',
        });
    }catch (err){
        res.status(400).send({ error: 'Erro carregando o projeto'});
    }
});

module.exports = router;