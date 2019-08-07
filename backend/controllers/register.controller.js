const Register = require('../models/user.model');
const Bcrypt = require('bcrypt');


exports.register_create = function (req, res) {
    console.log(`foi`);
    console.log("name " + req.body.name + " email " + req.body.email + " isadmin " + req.body.isadmin)
    let register = new Register(
        {
            name: req.body.name,
            email: req.body.email,
            password: Bcrypt.hashSync(req.body.password, 10),
            isadmin: req.body.isadmin
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