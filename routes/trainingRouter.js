const trainingController=require('../controllers/TrainingController.js');
const router=require('express').Router();



router.post('/addTraining', trainingController.trainingImageUpload ,trainingController.addTraining)
router.get('/allTrainings', trainingController.allTrainings)
router.get('/:id', trainingController.singleTraining)
router.put('/:id', trainingController.updateTraining)
router.delete('/:id', trainingController.deleteTraining)


module.exports=router;