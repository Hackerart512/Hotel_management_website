const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bodyParser = require('body-parser');

const fetchuser = require('../middelware/fectchuser');
router.use(bodyParser.json());


//Route:1 Update myprofile store in database , POST "/myprofile"

// fetchuse, use  beacause when user edit your profile then check coorect user orr not
// get from header token and get id by the user token 
router.put('/', fetchuser,  async (req, res) => {

    let success = false;

    const { name, gender, contact, address, city, state } = req.body;
  
    // create a update object
    const updateUser ={};
    // if "name" is given in the req.body then set the upadate otherwise previous count
    if(name) updateUser.name = name;
    if(gender) updateUser.gender = gender;
    if(contact) updateUser.contact = contact;
    if(address) updateUser.address = address;
    if(city) updateUser.city = city;
    if(state) updateUser.state = state;


  
    const user= await User.findById(req.user.id);
    // Check the user is exit or not
    if(!user){
        res.status(400).json({success,  message:"User not found"});
    }

    const myprofile = await User.findByIdAndUpdate(req.user.id,{$set:updateUser},{new:true});
    success=true;
    res.json({success, myprofile})
});


module.exports = router;