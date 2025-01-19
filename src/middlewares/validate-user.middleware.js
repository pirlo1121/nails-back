const { validateToken } = require('../helpers/jwt.helper');


const authUser = ( req, res, next ) => {
    
    const token = req.header( 'X-Token' );
    if( ! token ) {
        return res.json({
            ok: false,
            msg: 'Error al obtener el Token'
        });
    }

    try {
        const payload = validateToken( token );                       
        req.authUser = payload;     
        next();
    } 
    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Token no valido'
        });
    }
}


module.exports = {
    authUser
}