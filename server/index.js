require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env;
massive(CONNECTION_STRING).then(db=> app.set('db',db));
const app=express();
app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized: false
}))
app.use(bodyParser.json());

app.post('/auth/register', controller.register);

app.post('/auth/login', controller.login);

app.get('/auth/logout', controller.logout);

app.listen(SERVER_PORT, ()=>{
    console.log(`On the ${SERVER_PORT}th day of Christmas my true love gave to me..... nothing because I'm single.`);
})