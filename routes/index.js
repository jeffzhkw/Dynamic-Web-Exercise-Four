const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from router.`);
});

module.exports = router;
