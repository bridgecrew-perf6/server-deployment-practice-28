'use strict';

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();

function start(port){
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}

app.get('/' , (req,res) =>{
    res.send('home route')
})

app.get('/data' , (req,res) => {
    res.status(200).json({
        name: 'leen', 
        email: 'leenkaraja24@gmail.com',
        
    })
   
})

module.exports = {
    app: app,
    start: start
}
