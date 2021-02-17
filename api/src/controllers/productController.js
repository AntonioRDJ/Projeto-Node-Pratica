const db = require('../config/database');

// Listar todos os produtos
exports.listAllProducts = async (req, res) => {
    try{
        const response = await db.query('SELECT * FROM products ORDER BY name_product ASC');
        res.status(200).send(response.rows);
    }catch(err){
        res.status(400).send({error: 'Erro ao listar todos os produtos'});
    }
};


// Adicionar produtos
exports.addProduct = async (req, res) => {
    try{
    const { name_product, qtd_product, price_product} = req.body;
    await db.query(
        "INSERT INTO products (name_product, qtd_product, price_product) VALUES ($1, $2, $3)",
        [name_product, qtd_product, price_product]
    );

    res.status(201).send({
        message: "Produto Adicionado com sucesso!",
        body: {
        product: { name_product, qtd_product, price_product}
        },
    });
    }catch(err){
        console.log(err);
        res.status(400).send({ error: 'Erro ao adicionar o produto'})
    }
};

// Encontrar produto pelo id
exports.findProductById = async (req,res) => {
    try {
        const id_product = parseInt(req.params.id);
        const response = await db.query('SELECT * FROM products WHERE id_product = $1', [id_product]);
        res.status(200).send(response.rows);
    } catch (err) {
        res.status(400).send({error: 'Erro ao procurar o produto pelo id'})
    }
};

// Atualizar produto pelo id
exports.updateProductById = async (req, res) => {
    try {
        const id_product = parseInt(req.params.id);
        const { name_product, qtd_product, price_product } = req.body;

        await db.query(
        "UPDATE products SET name_product = $1, qtd_product = $2, price_product = $3 WHERE id_product = $4",
        [name_product, qtd_product, price_product, id_product]
    );

    res.status(200).send({ message: "Produto atualizado com sucesso" });

    } catch (err) {
        res.status(400).send({error: 'Erro ao atualizar o produto pelo id'})
    }
};

// Excluir produto pelo id
exports.deleteProductById = async (req, res) => {
    try {
        const id_product = parseInt(req.params.id);
        await db.query('DELETE FROM products WHERE id_product = $1', [
        id_product
        ]);

    res.status(200).send({ message: 'Produto deletado com sucesso, id: ', id_product });
    } catch (err) {
        res.status(400).send({error: 'Erro ao excluir o produto pelo id'})
    }
};
