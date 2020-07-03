const mongoose = require("mongoose");

const regSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    pronoun:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    phoneN:{
        type:Number,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    }

})

module.exports= mongoose.model("Reg", regSchema);