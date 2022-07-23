const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Users';

const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on('open', () => {
    console.log('Connected..')
});

const userRouter = require('./routers/users');
app.use(express.json())
app.use('/users', userRouter)

app.listen(9000, () => {
    console.log('Server started')
});