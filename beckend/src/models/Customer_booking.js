const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    id: {
        type: String,
    },

    gender: {
        type: String,
    },

    address: {
        type: String,
        required: true
    },

    date_from: {
        type: String,
        required: true
    },

    date_to: {
        type: String,
        required: true
    },

    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('customer_booking', customerSchema);