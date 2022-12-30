const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,{ useNewUrlParser : true, useUnifiedTopology : true}).then((data) => {
        console.log(`MongoDb connected with server : ${data.connection.host}`);
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = connectDatabase;