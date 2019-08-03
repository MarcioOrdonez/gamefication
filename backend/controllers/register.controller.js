const Register = require('../models/user.model');


exports.register_create = function (req, res) {
    console.log(`foi`);
    let register = new Register(
        {
            name: req.query.name,
            email: req.query.email,
            password: req.query.password,
            isadmin: req.query.isadmin
        }
    );

    register.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('register created successfully')
    })
};