const express = require('express');

const router = express.Router();
const Model = require('../models/model');
//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Post a json object
router.post('/post', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})



module.exports = router;