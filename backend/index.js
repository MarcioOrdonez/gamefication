const express = require('express');
const port = process.env.PORT || 3001;
const cors = require('cors');
const app = new express();
const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/gamefication";
const url = 'mongodb+srv://gamefication:gameimg123@cluster0-gm7yu.mongodb.net/gamefication?retryWrites=true&w=majority';
const game = require('./routes/game.route');

app.use(express.static('public'));
app.use(cors());
// app.get('/cadastro', (req, res) =>{
//     mongoose.connect(url, {useNewUrlParser: true},(req, res) =>{
        
//     });
// });

mongoose.connect(url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/game', game);

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Testando api node' });
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});