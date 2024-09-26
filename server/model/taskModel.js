const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    type:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending'},
    dueDate:{type:Date,required:true},
    property: { type: mongoose.Schema.Types.ObjectId, ref:'Property', required: true },
})

module.exports = new mongoose.model("Task", taskSchema);