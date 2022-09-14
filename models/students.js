const mongoose = require('mongoose')


let datamodeling = mongoose.Schema({
    name : String,
    age : Number,
    skill : String
},{
    timestamps : true
})

module.exports = mongoose.model('students', datamodeling )