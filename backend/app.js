const express = require('express');

const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());

const product = require('./routes/productRoute');

app.use("/api/vi", product);

//Middleware for Errors
app.use(errorMiddleware);


module.exports = app;