const express = require('express');
const Room = require('../models/Room')
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validator, validationResult } = require('express-validator')

router.use(bodyParser.json())


//Route:1 rooms , POST "/roooms"
router.post('/addroom', [
  body('image', 'Enter a password').isLength({ min: 4 }),
  body('title', 'Enter a password').isLength({ min: 7 }),
  body('description', "Decription is not setisfy").isLength({ min: 2 }),
  body('adult', "Enter a valid number").isLength({ min: 1 }),
  body('child', "Enter a valid number").isLength({ min: 1 }),
  body('type', "Enter a valid email").isLength({ min: 1 }),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    let room = await Room.create({
      image: req.body.image,
      title: req.body.title,
      description: req.body.description,
      adult: req.body.adult,
      child: req.body.child,
      type: req.body.type,
      price: req.body.price
    });

    success = true;
    res.json({ success })
  } catch (e) {
    res.status(500).json({ success, message: "Internal Error found" });
  }
});

//Route :2 Fetch all the room GET:"/rooms"
router.get('/fetchallroom', async (req, res) => {
  try {
    const docs = await Room.find({});
    res.json(docs)
  } catch (err) { console.log(err); }
})


//Route :3 delete room by the admin DELETE:"/"
router.delete('/deleteroom/:id', async (req, res) => {
  try {
    let success = false;
    let room = await Room.findById(req.params.id);
    if (!room) { return res.status(401).send("Not found") }

    room = await Room.findByIdAndDelete(req.params.id);
    success = true;
    res.json({ success, room, message: 'Note has been deleted' });
  } catch (err) { console.log(err); }
})

//Route :4 delete room by the admin DELETE:"/"
router.put('/updateroom/:id', async (req, res) => {

  let success = false;

  const { image, title, description, adult, child, type, price } = req.body;

  // create a update object
  const updateRoom = {};
  // if "image" is given in the req.body then set the upadate otherwise previous count
  if (image) updateRoom.name = image;
  if (title) updateRoom.title = title;
  if (description) updateRoom.description = description;
  if (adult) updateRoom.adult = adult;
  if (child) updateRoom.child = child;
  if (type) updateRoom.type = type;
  if (price) updateRoom.type = price;

  let room = await Room.findById(req.params.id);
  // Check the user is exit or not
  if (!room) {
    res.status(400).json({ success, message: "room not found" });
  }

  room = await Room.findByIdAndUpdate(req.params.id, { $set: updateRoom }, { new: true });
  success = true;
  res.json({ success, room })
});

//Route :5 Fetch all the room GET:"/rooms"
router.get('/fetchroom/:id', async (req, res) => {
  try {
    const docs = await Room.findById(req.params.id);
    res.json(docs)
  } catch (err) { 
    // console.log(err);
    res.status(500).json({ message: "Internal Error found" });
   }
})


module.exports = router;