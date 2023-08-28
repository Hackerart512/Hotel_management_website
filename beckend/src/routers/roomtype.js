const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validator, validationResult } = require('express-validator');
const RoomType = require('../models/RoomType');

router.use(bodyParser.json())


//Route:1 add room type , POST "/roomtype/addtype"
router.post('/addtype', [
    body('type', 'Enter a password').isLength({ min: 1 })
], async (req, res) => {

    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let roomtype = await RoomType.create({
            type: req.body.type
        });

        success = true;
        res.json({ success })
    } catch (e) {
        console.log(e)
        res.status(500).json({ success, message: "Internal Error found" });
    }
});


//Route :2 Fetch all room type GET:"/roomtype"
router.get('/fetchallroomtype', async (req, res) => {
    try {
        const docs = await RoomType.find({});
        res.json(docs)
    } catch (err) { console.log(err); }
})

//Route :3 delete room type by the admin DELETE:"/"
router.delete('/deleteroomtype/:id', async (req, res) => {
    try {
        let success = false;
        let type = await  RoomType.findById(req.params.id);
        if (!type) { return res.status(401).send("Not type found") }

        type = await RoomType.findByIdAndDelete(req.params.id);
        success = true;
        res.json({ success, type, message: 'type has been deleted' });
    } catch (err) { console.log(err); }
})

module.exports = router;