const Product = require('../models/product');

module.exports = {
    async getAllProducts(req, res) {
        try{
            const products = await Product.find().populate('category');
            res.status(200).json(products);
        }catch(err){
            res.status(500).json({ message: err.message });
        }
    },

    async getProductByID(req, res) {
        try{
            const product = await Product.findByID(req.params.id).populate('category');
            res.status(200).json(product);
        }catch(err){
            res.status(500).json({ message: err.message });
        }
    },

    async createProduct(req, res){
        const product = new Product ({
            name: req.body.name,
            description: req.body.price,
            price: req.body.price,
            category: req.body.category
        });

        try{
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        }catch(err){
            res.status(400).json({ message: err.message});
        }
    },
};