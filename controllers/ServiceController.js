const db = require('../models');


// create main model
const Services = db.services

// add a service
const addService = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        technologies: req.body.technologies
    }
    const service = await Services.create(info)
    res.status(200).send(service);
}


// get all the services
const allServices = async (req, res) => {
    let services = await Services.findAll({});
    res.status(200).send(services);
}


// get one service
const singleService = async (req, res) => {
    const id = req.params.id;
    let service = await Services.findOne({ where: { id: id } })
    res.status(200).send(service);
}


// update a service
const updateService = async (req, res) => {
    const id = req.params.id;
    let service = await Services.update(req.body, { where: { id: id } });
    res.status(200).send(service);
}


// delete service
const deleteService = async (req, res) => {
    const id = req.params.id;
    await Services.destroy({ where: { id: id } })
    res.status(200).send('This service is deleted');
}

module.exports = {
    addService,
    allServices,
    singleService,
    updateService,
    deleteService
}