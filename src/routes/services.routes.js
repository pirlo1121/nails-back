const { Router } = require('express'); 

const { authUser } = require('../middlewares/validate-user.middleware');
const {
  createService,
  getServices,
  updateServiceById,
  removeServiceById,
  getServiceById,
} = require('../controllers/service.controller');

const { validate } = require('../models/Service');

const router = Router(); 

router.get('/:id', getServiceById);
router.get('/', getServices);
router.post('/', authUser, createService); 
router.delete('/:id', authUser, removeServiceById);
router.patch('/:id', authUser, updateServiceById);

module.exports = router; 
