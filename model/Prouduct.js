const mongoose = require('mongoose');

        
const ProuductSchema = new mongoose.Schema({
    department:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    link_img:{
        type:String,
        required:true,
    },
    info:{
        type:String
    },
    price:{
        type:String,
        required:true,
    }
    ,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Prouduct = mongoose.model('Prouduct',ProuductSchema);