const Register = require('../models/user.model');


exports.ranking = function (req, res) {
    console.log(`foi`);
    let rank = Register.find({}, (err, docs)=>{
        return console.log(docs)
    })
    res.send(rank);
};