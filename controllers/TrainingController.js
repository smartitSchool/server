const db = require('../models');


// create main model
const Trainings = db.trainings

// add a training
const addTraining = async (req, res) => {
    let info = {
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
    let training = await Trainings.finOne({ where: { id: id } })
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
    deleteTraining
}