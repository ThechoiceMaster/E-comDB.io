const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  img: {
      type: String,
      require: true
  },
  date:{
      type: Date,
      default: Date.now
  }
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
