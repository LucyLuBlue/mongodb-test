var UPLOAD_PATH = require('./routes').UPLOAD_PATH;
var Image = require('./models/image');
var path = require('path'),
fs = require('fs'),
del = require('del');

//Adding an image
exports.uploadImage = function(req, res) {
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage })
    });
};

