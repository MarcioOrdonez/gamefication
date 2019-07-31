const Cadastro = require('../models/colaborador.model');


exports.cadastro_create = function (req, res) {
    let cadastro = new Cadastro(
        {
            name: req.query.name,
            email: req.query.email,
            password: req.query.password,
            isadmin: req.query.isadmin
        }
    );

    cadastro.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('cadastro Created successfully')
    })
};