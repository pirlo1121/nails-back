const { Router } = require('express'); 

const router = Router(); 

const {
  createProduct,
  getProducts,
  getProductById,
  removeProductById,
  updateProductById
} = require('../controllers/product.controller');

const { authUser } = require('../middlewares/validate-user.middleware');
const { validate } = require('../models/Product');


router.post('/', authUser, createProduct); 
router.get('/', getProducts); 
router.get('/:id', getProductById); 
router.delete('/:id', authUser, removeProductById); 
router.patch('/:id', authUser, updateProductById); 

module.exports = router; 
