const { genSaltSync, hashSync } = require( 'bcrypt' );
require('dotenv').config()

const UserModel = require( '../models/User' );


const createDefaultUsers = async () => {
    const pass = process.env.PASSADMIN;

    
    const salt = genSaltSync();                 

    try {
        const count = await UserModel.estimatedDocumentCount();

        if( count > 0 ) return;

        
        const users = await Promise.all([
            new UserModel({
                name: "Pirlo",
                username: process.env.EMAILADMIN,
                password: hashSync( pass, salt ),
                role: 'superadmin'
            }).save()
            
        ]);

        console.log( users );

    } 
    catch ( error ) {
        console.error( error );
    }

}

module.exports = {
    createDefaultUsers
}