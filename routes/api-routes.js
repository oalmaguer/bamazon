const db = require("../models");

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    db.Product.findAll().then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

    app.put('/api/update/', function(req, res) {
      console.log("req amount is " +req.body.amount); // 4
      console.log("req id is " + req.body.id);
      db.Product.findOne({
        where: {
          id: req.body.id
        }
      }).then(function(dbAmount) {
        const difference = dbAmount.stockQuantity - req.body.amount;
        console.log("difference value is " +difference);
        db.Product.update({
          stockQuantity: difference
        },
        {
        where: {
          id: req.body.id
        }
      }
        );
      }).then(function(result) {
        res.json(result);
      })
      

    });
};
