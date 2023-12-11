const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password:{
        require: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)