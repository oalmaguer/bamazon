//bring dependencies
require("dotenv");
const express = require("express");

//establish port and create server
const PORT = process.env.PORT || 3000;
const app = express();

//bring in models 
const db = require("./models");

//configure middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));

//require routes
require("./routes/api-routes.js")(app);

//sync models to database and allow server to listen requiest
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on http://localhost:" +PORT);
    })
})