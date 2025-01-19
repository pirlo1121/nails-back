const { Schema, model } = require( 'mongoose' );

const ProductSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'non-category'
    },
    urlImage: String,   
    userId: {           
        type: String,
        required: true
    }
}, {
    
    timestamps: true    
});


const ProductModel = model( 
    'Product',          
    ProductSchema       
);


module.exports = ProductModel;

