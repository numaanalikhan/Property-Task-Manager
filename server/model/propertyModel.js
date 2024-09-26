const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    idNumber:{type:String,required:true,unique:true},
    location:{type:String,required:true},
    board:{type:String,required:true},
})

module.exports = new mongoose.model("Property",propertySchema);