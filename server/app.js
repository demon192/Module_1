const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/', postsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send('We are on home');
});


//Connect to DB
mongoose.connect(
    'mongodb+srv://demon_19:demonishu@cluster0.l4d1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=> console.log('connected to DB'));

// How do we start listening to server
app.listen(3000);