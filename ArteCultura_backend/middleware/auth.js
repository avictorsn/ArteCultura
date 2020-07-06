const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/constants');

module.exports = (req, res, next) => {
    const authorizationHeader = req.get('Authorization');
    if (!authorizationHeader) {
        req.isAuth = false
        return next();
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false
        return next();
    }
    
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, secretKey);
    } catch (err) {
        req.isAuth = false
        return next();
    }
    req.isAuth = true
    req.userId = decodedToken.userId;
    next();

}