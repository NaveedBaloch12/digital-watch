const express = require('express');
const fs = require('fs');
let home = fs.readFileSync('./clock.html')
let style = fs.readFileSync('./style.css')
let script = fs.readFileSync('./script.js')

const app = express();
let port = 80;

app.get('/',(req,res)=>{
    res.send(home);
    res.send(style);
    res.send(script);
})

app.listen(port,()=>{console.log(`Srever is running on port ${port}`)})