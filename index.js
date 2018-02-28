const express = require('express');
const app =express();


app.get('/',(req,res)=>{
    res.send({Name:'Watcher'})
})

app.listen(5000);