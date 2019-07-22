const express = require('express');
const port = 3000;
const app = new express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'));
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
});