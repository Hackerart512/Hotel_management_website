const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    // my profile
        name:{
            type: String,
        },
        gender:{
            type: String,
        },
        contact:{
            type: String,
        },
        address:{
            type: String,
        },
        city:{
            type: String,
        },
        state:{
            type: String,
        },
    // my profile
    
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
    },

    country: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    rpassword: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);