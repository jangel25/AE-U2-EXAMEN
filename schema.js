const mongoose=require('mongoose');

module.exports=mongoose.Schema({
    code:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    minimum:{
        type: Number,
        required: true
    }
});