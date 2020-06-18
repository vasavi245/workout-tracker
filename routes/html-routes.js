// Requiring path to so we can use relative routes to our HTML files

const path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("/exercise", function(req,res) {
        console.log("Exercise")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function(req,res) {
        console.log("stats");
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}