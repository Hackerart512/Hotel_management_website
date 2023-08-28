const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const connectToMogoose= require('./database');

app.use(express.json());
app.use(cors());

// Available routes

//login, signup, middleware1 three routes in one file
app.use('/api/auth',require('./src/routers/auth'));

//contact us details 
app.use('/contactus',require('./src/routers/contactus'));

// rooms data add  POST/GET  in mongoose
app.use('/rooms',require('./src/routers/room'));

// myprofile data POST/GET  add  in mongoose
app.use('/myprofile',require('./src/routers/myprofile'));

//  cusotomer booking data add into mongoosea, POST/GET 
app.use('/costomerbooking',require('./src/routers/customer_booking'));


//  cusotomer booking data add into mongoosea, POST/GET 
app.use('/roomtype',require('./src/routers/roomtype'));


// http://localhost:5000/ send hello msg then when start nodemon index.js
app.get('/', function(req, res){
    res.send("Hello");
})



app.listen(port, function(){
    console.log(`localhost:${port}`);
})
