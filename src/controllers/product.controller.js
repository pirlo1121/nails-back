const { registerProduct, getAllProducts, getOneProductById, removeOneProductById, updateOneProductById } = require("../services/product.service");

const createProduct = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;   

    console.log( inputData );
    console.log( payload );

    
    if( inputData?.category?.length == 0 ) {
        delete inputData.category;
    }

    inputData.userId = payload._id; 

    try {
        const data = await registerProduct( inputData );    
        
        res.status( 201 ).json({ 
            ok: true,
            data 
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear producto'
        })
    }
    
}

const getProducts = async ( req, res ) => {

    console.log( req.authUser );

    try {
        const data = await getAllProducts();

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los productos'
        })
    }
    
}

const getProductById = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await getOneProductById( product_id );

        res.status( 200 ).json({ ok: true, data });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al obtener un producto por ID' })
    }
   
}

const removeProductById = async ( req, res ) => {
    const product_id = req.params.id;

    try {
        const data = await removeOneProductById( product_id );
        
        res.status( 204 ).json({ ok: true, data });
    } 
    catch( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un producto por ID'
        })
    }
    
}

const updateProductById = async ( req, res ) => {
    const product_id = req.params.id;   
    const inputData = req.body;         

    try {
        const updatedProduct = await updateOneProductById( product_id, inputData );  

        res.status( 206 ).json({
            ok: true,
            updatedProduct
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ ok: false, msg: 'Error al actualizar producto por ID' })
    }
}


module.exports = {
    createProduct, 
    getProducts, 
    getProductById,
    removeProductById,
    updateProductById
}