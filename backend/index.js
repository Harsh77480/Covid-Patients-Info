const express = require("express");
const app = express();

const middleware = require('./src/middleware/api');
const controller = require('./src/controllers/api');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/',

    middleware.getData, //get the data from public api
    controller.sendData //perform operations on it 

);

app.listen(3000, console.log("running"));