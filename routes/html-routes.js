var path = require("path");

module.exports = function(app) {


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.get("api/products", function(req, res) {
    res.json(res);
})


app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})


}