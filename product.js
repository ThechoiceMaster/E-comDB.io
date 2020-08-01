const express = require("express");
const router = express.Router();
const Product = require("./model/Product");

router.get("/get", async (req, res) => {
  let result = await Product.find().limit(5).sort({ _id: -1 });
  res.json(result);
});
router.post("/add", (req, res) => {
  const { name, img, price, stock, detail } = req.body;
  const newProduct = new Product({
    name,
    img,
    price,
    stock,
    detail,
  });
  newProduct
    .save()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
