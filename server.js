const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    const file = path.resolve('public/index.html');
    res.sendFile(file);
})

app.listen(3000, ()=>console.log("connected"));