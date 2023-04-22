const Models = require('../models')

function addForm(req, res) {
    Models.Test.create(req.body)
    res.send(req.body)
}

function getForm(req, res) {
    Models.Test.findAll()
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    addForm,
    getForm
}