const ProductModel = require( '../models/Product' );

async function registerProduct( product ) {
    return await ProductModel.create( product );
}

async function getAllProducts() {
    return await ProductModel.find();
}

async function getOneProductById( id ) {
    return await ProductModel.findById( id );
    
}

async function removeOneProductById( id ) {
    return await ProductModel.findOneAndRemove({ _id: id });
}

async function updateOneProductById( id, updatedProduct ) {
    return await ProductModel.findOneAndUpdate(
        { _id: id },        
        updatedProduct,     
        { new: true }       
    );
}


module.exports = {
    registerProduct, 
    getAllProducts, 
    getOneProductById,
    removeOneProductById, 
    updateOneProductById
}