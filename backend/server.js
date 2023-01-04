const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//Handling uncaught Exception
process.on("uncaughtException", err =>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting the server due to uncaught exception");

    server.close(() => {
        process.exit(1);
    })
})

//Config env file
dotenv.config({ path: "backend/config/config.env" });

//Connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});


//Unhandled Promise Exception
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting the server due to unhandled promise exception");

  server.close(() => {
    process.exit(1);
  });
});
