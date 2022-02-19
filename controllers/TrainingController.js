const db = require('../models');
const multer = require('multer');
const path = require('path');

// create main model
const Trainings = db.trainings


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const trainingImageUpload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        } else{
            cb('Give proper file format to upload')
        }
    }
}).single('image');




// add a training
const addTraining = async (req, res) => {
    let info = {
        image: req.file.path,
        course_name: req.body.course_name,
        fee: req.body.fee,
        description: req.body.description,
        technologies: req.body.technologies,
        total_classes:req.body.total_classes
    }
    const training = await Trainings.create(info)
    res.status(200).send(training);
}


// get all the trainings
const allTrainings = async (req, res) => {
    let training = await Trainings.findAll({});
    res.status(200).send(training);
}


// get one training
const singleTraining = async (req, res) => {
    const id = req.params.id;
    let training = await Trainings.findOne({ where: { id: id } })
    res.status(200).send(training);
}


// update a training
const updateTraining = async (req, res) => {
    const id = req.params.id;
    let training = await Trainings.update(req.body, { where: { id: id } });
    res.status(200).send(training);
}


// delete training
const deleteTraining = async (req, res) => {
    const id = req.params.id;
    await Trainings.destroy({ where: { id: id } })
    res.status(200).send('This service is deleted');
}

module.exports = {
    addTraining,
    allTrainings,
    singleTraining,
    updateTraining,
    deleteTraining,
    trainingImageUpload
}