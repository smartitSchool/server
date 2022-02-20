const admissionController = require('../controllers/AdmissionController.js');
const router = require('express').Router();



router.post('/addAdmission', admissionController.formAvatarUpload, admissionController.newStudent)
router.get('/allAdmissions', admissionController.allAdmissions)
router.get('/:id', admissionController.singleAdmission)
// router.put('/:id', orderController.updateOrder)
router.delete('/:id', admissionController.deleteAdmission)


module.exports = router;