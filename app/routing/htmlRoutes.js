var path = require("path");
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    });
    // this routes to "home" if anything other than "/survey" is entered in URL
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })
}