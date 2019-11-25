module.exports = function(sequelize, DataTypes) {

    const Product = sequelize.define("Product", {

       productName: {
           type: DataTypes.STRING,
           allowNull: false
       } ,

       departmentName: {
           type:DataTypes.STRING,
           allowNull: false
       },

       price: {
           type: DataTypes.INTEGER, 
           allowNull: false
       },

       stockQuantity: {
           type: DataTypes.INTEGER, 
           allowNull: false
       }

    });

    return Product;

};


// The Product model should have each of the following fields:

//    * product_name (Name of product)

//    * department_name

//    * price (cost to customer)

//    * stock_quantity (how much of the product is available in stores)

// * Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
