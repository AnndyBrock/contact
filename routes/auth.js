const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');


//@route  GET api/auth
//@desc   get logged in user
//@access Private
router.get('/', auth, async (req, res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//@route  POST api/auth
//@desc   auth user and get token
//@access Piblic
router.post('/',
    [
        check('email','Please include  valid email').isEmail(),
        check('password','Please check password').exists()
    ], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user){
            return res.status(400).json({msg: "Invalid email"})
        }
        const isMatch = await bcrypt.compare(password, user.password); 
        if (!isMatch){
            return res.status(400).json({msg: "Invalid password"})
        }
        const payload = {
            user:{
                id:user.id
            }
        };
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (error, token)=>{
            if (error) throw error;
            return res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;