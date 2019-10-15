const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    //get token from header
    const token = req.header('x-auth-token');

    //check if exist
    if (!token){
        return res.status(401).json({msg: 'No token. Authorization denied!'})
    }
    try {
        const decoder = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoder.user;
        next();
    }catch (err) {
        console.error(err.message);
        res.status(401).send({msg: 'Invalid token!'});
    }
};

