const db = require("../models");

module.exports = function(app) {

    app.get("/api/products", function(req, res) {
        db.Product.findAll()
    .then(function(result) {
        res.json(result);
    });

    });

}