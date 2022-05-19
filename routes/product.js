const router = require("express").Router();
const Product = require("../models/product");
const upload = require("../middlewares/upload-photo");

// POST request - Create a new Product
router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    //product.owner = req.body.ownerID;
    //product.category = req.body.categoryID;
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.price = req.body.price;
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


//Get All product
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find()
    res.json({
      success: true,
      products: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// GET request - GET single Product
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id })
      
    res.json({
      success: true,
      product: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


module.exports = router;