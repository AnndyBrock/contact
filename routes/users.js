const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


const User = require('../models/User');

//@route  POST api/users
//@desc   register user
//@access Public
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email','Email is required').isEmail(),
    check('password','Password length must be more then 5 characters').isLength({ min: 5 })
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name, email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (user){
            return res.status(400).json({msg: "User already exists!"});
        }
        user = User({
            name,email,password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user:{
                id:user.id
            }
        };
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (err, token)=>{
            if (err) throw err;
            return res.json({token })
        });
    } catch (error) {
        console.error(error.msg);
        res.status(500).send('Server error');
    }
});

module.exports = router;