const Register = require('../models/user.model');
const Bcrypt = require('bcrypt');


exports.register_create = function (req, res) {
    console.log(`foi`);
    let register = new Register(
        {
            name: req.query.name,
            email: req.query.email,
            password: Bcrypt.hashSync(req.query.password, 10),
            isadmin: req.query.isadmin
        }
    );

    register.save(function (err) {
        if (err) {
            res.send('Email ja cadastrado');
            return console.log(err);
        }
        res.send('register created successfully')
    })
};