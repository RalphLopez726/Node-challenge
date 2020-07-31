
const express = require('express');
const app= express();
const port =3000;

app.get('/', function(Req,res){
    res.sendfile('./home.html' , {root: __dirname });
});

app.get('/home', (Req, res) => {
    res.sendFile('./home.html' , {root: __dirname });
});

app.get('/about', (Req, res) => {
    res.sendFile('./about.html' , {root: __dirname });
});

app.get('/contact', (Req, res) => {
    res.sendFile('./contact.html' , {root: __dirname });
});

app.get('/', function(Req,res){
    res.sendStatus(401)










app.listen(port,function(){
console.log('listening to port:',port);
});