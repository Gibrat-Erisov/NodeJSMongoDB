const mongoose = require('mongoose');
const User = mongoose.model('User');

const bCrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/app');



const signIn = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email})
        .exec()
        .then((user) => {
            if (!user) {
                res.status(401).json({message: 'User dose not exist! '})
            }

            const isValid = bCrypt.compareSync(password, user.password);

            if(isValid) {
                // генерация цифровой подписи
                const token = jwt.sign(user._id.toString(), jwtSecret);  
                res.json({ token });
            } else {
                res.status(401).json({message: 'Invalid !!!)))'})
            }
        })
        .catch(err => res.status(500).json({message: err.message }))
}


module.exports = {
    signIn,
}