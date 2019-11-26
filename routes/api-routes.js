const db = require("../models");

module.exports = function(app) {

    app.get("/api/products", function(req, res) {
        db.Product.findAll()
    .then(function(result) {
        res.json(result);
    });

    });


    app.get("/api/products/:id", function(req, res) {

        db.Product.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(result) {
            res.json(result);
        })
    })


    app.post("/api/products", function(req, res) {
        db.Product.findAll({})
    .then(function(result) {
        return res.json(result);
    });

    app.get("/api/newValue", function(req, res) {
    return res.json(newStock);
    console.log(newStock);
});

    app.put("/api/products/update", function(req, res) {

        db.Product.update(req.body,
            {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.json(result);
        });

    })
    
//     5. Once the customer has placed the order, your application should check if
//  your store has enough of the product to meet the customer's request.

//     * If not, the app should display a phrase like `Insufficient quantity!`, 
// and then prevent the order from going through.
 
// //  7. However, if your store _does_ have enough of the product, you should fulfill 
// the customer's order.
// //     * This means updating the SQL database to reflect the remaining quantity.
// //     * Once the update goes through, show the customer the total cost of their purchase.
 
//  - - -



});










    
}