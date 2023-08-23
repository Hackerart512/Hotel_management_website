const express = require('express');
const router = express.Router();
const ContactSheme = require('../models/Contactusmodel')
const bodyParser = require('body-parser');
const { body, validator, validationResult } = require('express-validator')

router.use(bodyParser.json())

// post reuest on /api/auth
router.post('/', [
  body('Fname', 'Enter a password').isLength({ min: 1 }),
  body('Lname', 'Enter a password').isLength({ min: 1 }),
  body('email', "Enter a valid email").isEmail(),
  body('phoneNumber', 'Enter a password').isLength({ min: 1 })
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
      let contact = await ContactSheme.create({
      Fname: req.body.Fname,
      Lname: req.body.Lname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message
    });
    
    success = true;
    res.json({success})
  } catch (e) {
    res.status(500).json({ message: "Internal Error found" });
  }
});

module.exports = router;