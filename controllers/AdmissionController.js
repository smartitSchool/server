const db = require('../models');
const multer = require('multer');
const path = require('path');

// create main model
const Admissions = db.admission;



// image upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const formAvatarUpload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        } else {
            cb('Give proper file format to upload')
        }
    }
}).single('avatar');




// add a service
const newStudent = async (req, res) => {
    let info = {
        avatar: req.file.path,
        name: req.body.name,
        nid: req.body.nid,
        fathersName: req.body.fathersName,
        mothersName: req.body.mothersName,
        presentAddress: req.body.presentAddress,
        permanentAddress: req.body.permanentAddress,
        DOB: req.body.DOB,
        bloodGroup: req.body.bloodGroup,
        gender: req.body.gender,
        ocupation: req.body.ocupation,
        nationality: req.body.nationality,
        phone: req.body.phone,
        phone2: req.body.phone2,
        email: req.body.email,
        gurdianContact: req.body.gurdianContact,
        gurdianContact2: req.body.gurdianContact2,
        gurdianRelation: req.body.gurdianRelation

    }
    const admission = await Admissions.create(info)
    res.status(200).send(admission);
}


// get all the services
const allAdmissions = async (req, res) => {
    let admissions = await Admissions.findAll({});
    res.status(200).send(admissions);
}


// get one service
const singleAdmission = async (req, res) => {
    const id = req.params.id;
    let admission = await Admissions.findOne({ where: { id: id } })
    res.status(200).send(admission);
}


// update a service
// const updateService = async (req, res) => {
//     const id = req.params.id;
//     let service = await Services.update(req.body, { where: { id: id } });
//     res.status(200).send(service);
// }


// delete service
const deleteAdmission = async (req, res) => {
    const id = req.params.id;
    await Admissions.destroy({ where: { id: id } })
    res.status(200).send('This admission is deleted');
}

module.exports = {
    newStudent,
    allAdmissions,
    singleAdmission,
    // updateService,
    deleteAdmission,
    formAvatarUpload
}