const Register = require('../models/user.model');
const Bcrypt = require('bcrypt');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        var user = await Register.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(400).send({ message: "The username does not exist" });
        }
        if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }
        res.send({ message: "The username and password combination is correct!" });
        const id = user.id;
        var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        res.send({ token: token });
        console.log('deu certo');
        } catch (error) {
            res.status(500).send(error);
        }
    };