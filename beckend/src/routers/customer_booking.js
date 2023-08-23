const express = require('express');
const Customer_booking = require('../models/Customer_booking')
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validator, validationResult } = require('express-validator')

const fetchuser = require('../middelware/fectchuser');

router.use(bodyParser.json())


//Route:1 cusotom booing data add into mongoose , POST "/costomerbooking"
router.post('/addcustomer', fetchuser, [
  body('name', 'Your name is  so short').isLength({ min: 4 }),
  body('contact', 'Enter a valid phone number').isLength({ min: 2 }),
  body('email', "plz enter valid email").isEmail(),
  // body('id', "Your adhar id is not valid").isLength({ min: 1 }),
  // body('gender', "select gender").isLength({ min: 1 }),
  body('address', "Enter a valid email").isLength({ min: 1 }),
  // body('room',""

], async (req, res) => {
  let success = false;

  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    let AddCustomer = await Customer_booking.create({
      user: req.user.id,
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      id: req.body.id,
      gender: req.body.gender,
      address: req.body.address,
      date_from: req.body.date_from,
      date_to: req.body.date_to,
      image: req.body.image,
      title: req.body.title
    });

    success = true;
    res.json({ success })
  } catch (e) {
    res.status(500).json({ success, message: "Internal Error found" });
  }
});


// Route:2 Get Customer booking user GET "/costomerbooking" login required
router.get('/',fetchuser,async(req,res)=>{
  try{
      userid =  req.user.id;
      
      const customer = await Customer_booking.find({user:userid}).select("-password");
      res.json({customer})
  }catch(e){
      res.status(500).json({message:"This is internal Error...."})
  }
})

module.exports = router;