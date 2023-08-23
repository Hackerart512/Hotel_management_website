const mongoose = require('mongoose');
const {Schema} = mongoose;

const roomSchema = new Schema({
    image:{
        type: String,
        required: true
    },

    title:{
        type: String,
        required: true
    },

    description:{
         type: String,
         required: true
    },

    adult:{
        type:String,
        required: true
    },

    child:{
        type:String,
        required: true
    },

    type:{
        type: String,
        required: true
    },
    price:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('Room', roomSchema);