const { Schema, model } = require( 'mongoose' );

const ServiceSchema = new Schema({
    
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
    urlImage:String,
    userId:{
        type: String,
        required: true
    }
}, {
    
    timestamps: true    
});


const ServiceModel = model( 
    'Service',          
    ServiceSchema       
);


module.exports = ServiceModel;

