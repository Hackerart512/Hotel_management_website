// it's naver used
const mongoose = require('mongoose');
const {Schema} = mongoose;

const loginSchema = new Schema({
   
    email: {
        type: String,
        required: true,
        // unique:true
    },

    password: {
        type: String,
        required: true,
    },


    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('Login', loginSchema);