const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds255308.mlab.com:55308/heroku_ldzt8mx6", 
{
     
     useMongoClient: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  


