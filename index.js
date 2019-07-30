const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
const app = new express();
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/gamefication";
const cadastro = require('./routes/colaborador.route');

app.use(express.static('public'));

// app.get('/cadastro', (req, res) =>{
//     mongoose.connect(url, {useNewUrlParser: true},(req, res) =>{
        
//     });
// });
///////////////////////// ?????? ///////////////////////////////////
mongoose.connect(url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/cadastro', cadastro);

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Testando api node' });
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});