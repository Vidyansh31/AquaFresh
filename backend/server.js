const app = require('./app');

const dotenv = require('dotenv');

const connectDatabase = require("./config/database"); 

//Config env file
dotenv.config({path : "backend/config/config.env"});

//Connect to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})