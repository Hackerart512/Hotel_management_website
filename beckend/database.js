// only connnect orr not declared
const express = require('express');
const mongoose = require('mongoose');


const mogooseURI = 'mongodb://127.0.0.1:27017/HotelManagementDatabase';

mongoose.connect(mogooseURI,{});

var db = mongoose.connection;
db.on('connected', function(){
    console.log('Connect to mongoose successfully...');
})

module.exports = db;
