const express = require('express')
const router = express.Router();
const controller = require('../controllers')

router.post('/add', (req, res) => { 
    controller.testController.addForm(req, res);  
})

router.get('/name', (req, res) => {
    controller.testController.getName(req, res);
})

router.post('/read', (req, res) => {
    controller.testController.getForm(req, res);
})
   
module.exports = router