const express = require('express');
const ProductModel = require('../../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
    const { query } = req;
    if (query) {
        try {
            const products = await ProductModel.find(query);
            if (products.length) {
                res.send(products);
            } else {
                res.status(500).send({ message: `Bad query:`, query });
            }
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    } else {
        try {
            const products = await ProductModel.find();
            res.send(products);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
});

router.get('/:id', getProduct, (req, res) => {
    res.send(res.product);
});

router.post('/', async (req, res) => {
    const product = new ProductModel({
        model: req.body.model,
        brand: req.body.brand,
    });
    try {
        const newProduct = await product.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.brand != null) {
        res.product.brand = req.body.brand;
    }
    try {
        const updatedProduct = await res.product.save();
        res.send(updatedProduct);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.send({ message: 'Deleted Product' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

async function getProduct(req, res, next) {
    let product;
    try {
        product = await ProductModel.findById(req.params.id);
        if (product == null) {
            return res.status(404).send({ message: 'Cannot find subscriber' });
        }
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }

    res.product = product;
    next();
}

// //////////////////////

// router.post('/', async (req, res) => {
//     const { name } = req.body;
//     try {
//         let product = await ProductModel.findOne({ name });
//         if (product) {
//             return res.status(400).send({ errors: [{ msg: 'Cloth item already exists' }] });
//         }

//         product = new ProductModel(req.body);

//         await product.save();
//         res.send(product);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

module.exports = router;
