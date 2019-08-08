const Register = require('../models/user.model');
const Bcrypt = require('bcrypt');


exports.login = async  (req, res) => {
    try {
        var user = await Register.findOne({email: req.query.email}).exec();
        if(!user){
            return res.status(400).send({ message: "The username does not exist" });
        }
        if(!Bcrypt.compareSync(req.query.password, user.password)){
            return res.status(400).send({ message: "The password is invalid" });
        }
        res.send("The username and password combination is correct!" );
        console.log('deu certo');
    } catch (error){
        res.status(500).send(error);
    }};