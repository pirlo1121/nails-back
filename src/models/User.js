const { Schema, model } = require( 'mongoose' );

const UserSchema = new Schema({
    
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    
    role: {
        type: String,
        required: true,
        default: 'registered'
    }
},
{   
    timestamps: true
}
);


const UserModel = model( 'User', UserSchema );


module.exports = UserModel;
