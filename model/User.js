const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Product: [
    {
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
        require: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
