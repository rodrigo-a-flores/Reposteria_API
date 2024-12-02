import Product from "../Model/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({order: [['order', 'ASC']]});
        res.status(200).json({productList: products});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}