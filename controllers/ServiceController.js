const db = require('../models');
const multer = require('multer');
const path = require('path');

// create main model
const Services = db.services



// image upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const serviceImageUpload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        } else {
            cb('Give proper file format to upload')
        }
    }
}).single('image');




// add a service
const addService = async (req, res) => {
    let info = {
        image: req.file.path,
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
    deleteService,
    serviceImageUpload
}