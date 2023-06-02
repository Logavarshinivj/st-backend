const mongoose = require('mongoose')

const teacherSchema=new mongoose.Schema({
    name:{type:String},
    qualification:{type:String},
    experience:{type:Number},
    mobile:{type:Number}
})


const Teacher=mongoose.model("teachers",teacherSchema)
module.exports = Teacher