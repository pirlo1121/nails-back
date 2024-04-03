const mongoose = require( 'mongoose' );
const urlatlas = "mongodb+srv://nails21:nails21@nails.09ex182.mongodb.net/"

const dbConection = async () => {

    try {
        await mongoose.connect( urlatlas, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log( 'Base de datos inicializada correctamente' );
    }
    catch( error ) {
        console.error( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }
}
module.exports = {
    dbConection
};