const mongoose = require('mongoose');
const {Schema} = mongoose;

const roomTypeSchema = new Schema({
   
    type:{
        type: String,
        required: true
    },
 
    date: {
        type: Date,
        default: Date.now,
        required:true
    }
});

module.exports = mongoose.model('Roomtype', roomTypeSchema);