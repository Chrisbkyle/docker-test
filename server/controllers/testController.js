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
    if (req.body.lastName === undefined) {
        res.send('please select user')
    } else {
        Models.Test.findOne({where: {lastName: req.body.lastName}})   
        .then(data => {
            res.send(data)
    })}
}

module.exports = {
    getName,
    addForm,
    getForm
}