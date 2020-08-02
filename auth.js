const express = require("express");
const router = express.Router();
const User = require("./model/User");
const bcrypt = require("bcryptjs");
const Product = require("./model/Product");

//!-------------------------------Register-----------------------------------------//

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  let result = await User.findOne({ email: email });
  if (result != null) {
    res.json({ message: "มี Email นี้ในระบบแล้ว" });
  } else {
    let result = await User.findOne({ username: username });
    if (result != null) {
      res.json({ message: "มี Username นี้ในระบบแล้ว" });
    } else {
      const newUser = new User({
        username,
        email,
        password,
      });
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json({ message: "สมัคสมาชิกสำเร็จแล้ว" });
            })
            .catch((err) => console.log(err));
        })
      );
    }
  }
});

//!------------------------------------Login-------------------------------------//

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let result = await User.findOne({ username: username });
  if (result != null) {
    if (bcrypt.compareSync(password, result.password)) {
      res.json({ message: result });
    } else {
      res.json({ message: "รหัสผ่านไม่ถูกต้อง" });
    }
  } else {
    res.json({ message: "ชื่อผู้ใช้ไม่ถูกต้อง" });
  }
});


//!------------------------------------GET PRODUCT BY User-------------------------------------//
router.post("/get", async (req, res) => {
  const { username } = req.body;
  let result = await Product.find({ username: username });
  res.json(result);
});

module.exports = router;
