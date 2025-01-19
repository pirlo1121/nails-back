const { compareSync } = require("bcrypt");

const UserModel = require("../models/User");

const { findUserByUsername, registerUser } = require('../services/auth.service');
const { generateToken } = require("../helpers/jwt.helper");


const register = async ( req, res ) => {
    console.log( 'REGISTRANDO...' )

    
    const { username } = req.body;        

    
    const userFound = await findUserByUsername( username );         
    
    if( userFound ) {
        return res.status( 200 ).json({
            ok: false,
            msg: 'El usuario ya existe!'
        });
    }
    
    registerUser( req.body );

    
    
    res.status( 201 ).json({
        ok: true,
        msg: 'Usuario registrado exitosamente'
    }); 
}

const login = async ( req, res ) => {
    
    const { username, password } = req.body;         

    
    const userFound = await findUserByUsername( username );

    if( ! userFound ) {
        return res.status( 400 ).json({
            ok: false,
            msg: 'El usuario no existe! Por favor registrese.'
        });
    }

    
    const isValidPassword = compareSync( password, userFound.password );

    if( ! isValidPassword ) {
        return res.status( 400 ).json({
            ok: false,
            msg: 'Password invalido'
        });
    }

    
    
    const userData = userFound.toObject();  
    delete userData.password;               

    
    console.log( userData );

    
    const payload = { ...userData };       

    const token = generateToken( payload );

    
    res.status( 200 ).json({
        ok: true,
        token
    });
}

const renewToken = ( req, res ) => {
    const userData = req.authUser;
    const { id } = userData;

    
    delete userData.iat;
    delete userData.exp;

    
    const userFound = UserModel.findById( id );
    
    if( ! userFound ) {
        res.status( 400 ).json({
            ok: false,
            msg: 'El usuario no existe, no renueva el token'
        });
    }

    
    const newToken = generateToken({ ...userData });    

    res.status( 200 ).json({ 
        ok: true,
        token: newToken,
        userData
    });
}



module.exports = {
    login,
    register,
    renewToken
}