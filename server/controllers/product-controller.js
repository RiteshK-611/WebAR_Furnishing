import Product from '../models/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}
export const getProductById = async (request, response) => {
    try {
         const product = await Product.findOne({ 'id': request.params.id });
          response.json(product);
    } catch (error) {
        console.log('Error:', error.message);
    }
}