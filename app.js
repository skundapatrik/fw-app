const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middle wares

app.use(bodyParser.json());

//app.use('/posts', () => {
 //   console.log('This is a middleware running');
//})

//Import Routes as middleware

const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);


//ROUTES

app.get('/', (req, res) => {
    res.send('we are on home');
})


//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
      useUnifiedTopology: true },
    () => console.log('connected to DB!')
);

//How to listen

app.listen(3000);