const express = require('express');
const connectMongoDB = require('./config/database.js');
const { validationData } = require('./middleware/student.js');
const app = express();
const colors = require('colors');
const env = require('dotenv').config();

// dotinv init
let PORT = process.env.SERVER_PORT;

// body data get
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// connect mongoDB
connectMongoDB();

// middleware validation use
app.get('/faruk', validationData, (req, res)=>{
    res.status(200).json({
        message : "Middleware Checked"
    })
});

// students router
app.use('/api/students', require('./router/students'));

app.listen(5050, ()=>{console.log(`server is run on PORT : ${PORT}`);});