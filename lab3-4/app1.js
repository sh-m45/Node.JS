const http = require('http');
const fs = require('fs');
const express = require('express');
const { json } = require('body-parser');
const { parse } = require('path');
const app1 = express();

app1.get('/', (req, res) => {

    res.write("<h1>home page</h1>");
})

app1.get('/profile', (req, res) => {

    res.write('profile Page');
    res.end();
})

app1.post('/signUp', express.json(), (req, res) => {
    console.log(req.body);

    res.json({ message: 'wellcome' })
    fs.writeFile('file.txt', JSON.stringify(req.body) , function (err, data) {
        if (err) {
            console.log(err);
        }
        
    });
});

app1.post('/login', express.json(), (req, res) => {
    // console.log(req.body);
    var contentLogin = req.body;
    console.log(contentLogin);
    var contentSignUp = JSON.parse(fs.readFileSync('./file.txt', 'utf8'));
    
    if(contentLogin.email == contentSignUp.email && contentLogin.password == contentSignUp.password)
    {
        // console.log('welcome');
        app1.get('/login', (req, res)=>{
            res.write(`<h1 style="color: red; text-align: center">welcome ${contentSignUp.username}</h1>`);
            res.end();
        })
    }
    else if(contentLogin.email == contentSignUp.email && contentLogin.password != contentSignUp.password)
    {
        //console.log('not');
        app1.get('/login', (req, res)=>{
            res.write(`<h1 style="color: red; text-align: center">400 , your password not correct</h1>`);
            res.end();
        })
    }
    else if(contentLogin.email != contentSignUp.email && contentLogin.password == contentSignUp.password && contentLogin.email !='')
    {
        //console.log('not');
        app1.get('/login', (req, res)=>{
            res.write(`<h1 style="color: red; text-align: center">400 , your gmail not correct</h1>`);
            res.end();
        })
    }
    else if(contentLogin.email == ''){
        app1.get('/login', (req, res)=>{
            res.write(`<h1 style="color: red; text-align: center">400 , your gmail not exit , please enter your gmail</h1>`);
            res.end();
        })
    }

});


app1.listen(4000, () => {
    console.log('server is running app1 .... test');
})


