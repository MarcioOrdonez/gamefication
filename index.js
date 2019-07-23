const express = require('express');
const port = process.env.PORT || 3001;
const app = new express();

app.use(express.static('public'));

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Testando api node' });
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});