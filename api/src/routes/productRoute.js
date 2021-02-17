/**
 * routes/equipamentoRoute.js
 * Arquivo responsável pelas rotas da api relacionado ao Product.
 */

const router = require('express-promise-router')();
const productController = require('../controllers/productController');

// Listar os produtos
router.get('/products', productController.listAllProducts);

// Adicionar produtos
router.post('/products', productController.addProduct);

// Listar produto pelo id
router.get('/products/:id', productController.findProductById);

// Atualizar produto pelo id
router.put('/products/:id', productController.updateProductById);

// Excluir produto pelo id
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;