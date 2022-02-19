const serviceController = require('../controllers/ServiceController.js');
const router = require('express').Router();



router.post('/addService', serviceController.serviceImageUpload, serviceController.addService)
router.get('/allServices', serviceController.allServices)
router.get('/:id', serviceController.singleService)
router.put('/:id', serviceController.updateService)
router.delete('/:id', serviceController.deleteService)


module.exports = router;