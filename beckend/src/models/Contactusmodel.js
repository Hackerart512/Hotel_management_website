const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactSchema = new Schema({
    Fname:{
        type: String,
        required: true
    },

    Lname:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        // unique:true
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    message:{
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('Contact', contactSchema);