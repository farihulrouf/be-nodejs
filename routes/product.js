
   
const router = require("express").Router();
const Product = require("../models/product");
router.post("/products", async (req, res) => {
  try {
    let product = new Product();
    //product.owner = req.body.ownerID;
    //product.category = req.body.categoryID;
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.photo;
    //product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();
    res.json({
      status: true,
      message: "Success"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});



module.exports = router;