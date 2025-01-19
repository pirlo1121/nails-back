require( 'dotenv' ).config();                               

const express = require( 'express' );                       
const { dbConection } = require('./src/config/mongo.config');   
const app = express();                                      
const cors = require( 'cors' );                             
const { createDefaultUsers } = require('./src/config/mongo.setup');


const PORT = process.env.PORT || 4001;                      

app.use( cors() );
app.use( express.json() );


app.use( '/api/auth', require( './src/routes/auth.routes' ) );
app.use(
    '/api/products',                        
    require( './src/routes/products.routes' )   
);    
app.use( '/api/categories', require( './src/routes/category.routes' ) );

app.use('/api/services', require('./src/routes/services.routes'));

app.use('/api/talleres', require('./src/routes/taller.routes'));

app.get('/', (req, res) => {
    res.status(200).json({ message: '¡Bienvenido a mi servidor backend!' });
  });

app.get('/health', (req, res) => {
    
    
    
    const healthStatus = {
        status: 'ok',
        message: 'Application is healthy'
    };
    res.json(healthStatus);
});

dbConection();      
createDefaultUsers();



app.listen( PORT, function() {
    console.log( `express corriendo en >>> http://localhost:${ PORT }` );
} );
