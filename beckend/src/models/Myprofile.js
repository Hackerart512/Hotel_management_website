const mongoose = require('mongoose');
const {Schema} = mongoose;

const myprofileSchema = new Schema({

    // kis user ke notes hain ?
    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'User'
    },

    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('myprofile', myprofileSchema);