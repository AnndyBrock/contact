const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc   get all user contacts
//@access Private
router.get('/', (req, res)=>{
    res.send('Get all contacts ')
});

//@route  POST api/contacts
//@desc   add new contact
//@access Private
router.post('/', (req, res)=>{
    res.send('Add new contact')
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