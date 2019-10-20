const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');


//@route  GET api/contacts
//@desc   get all user contacts
//@access Private
router.get('/', auth, async (req, res)=>{
    try {
        const contact = await Contact.find({user: req.user.id}).sort({date:-1 });
        res.json(contact);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }
});

//@route  POST api/contacts
//@desc   add new contact
//@access Private
router.post('/', [ auth, check('name','Please enter contact name').not().isEmpty()], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, email, phone, type} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();
        res.json(contact)
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server error');
    }
});

//@route  PUT api/contacts/:id
//@desc   update contact
//@access Public
router.put('/:id', (req, res)=>{
    res.send('update a user contact')
});

//@route  DEL api/contacts/:id
//@desc   register user
//@access Public
router.delete('/:id', (req, res)=>{
    res.send('Delete user contact')
});

module.exports = router;