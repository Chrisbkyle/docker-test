const Models = require('../models')

function addForm(req, res) {
    Models.Test.create(req.body)
    res.send(req.body)
}

function getName(req, res) {
    Models.Test.findAll()
    .then(data => {
        res.send(data)
    })
}
  
function getForm(req, res) {
    console.log(req.body)
    Models.Test.findOne()
    .then(data => {
        res.send(data)
    })
}

module.exports = {
    getName,
    addForm,
    getForm
}