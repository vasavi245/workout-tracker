const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

let db = require("./models");
//creating express app

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
//Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.promise = global.promise;
// connect to the mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
     
     useMongoClient: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  


