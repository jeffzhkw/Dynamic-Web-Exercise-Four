const express = require("express");

const router = express.Router();

// TODO: hook up to firebase for a single article based on ID
router.get("/", (req, res) => {
  res.send(`
  <h1>Single Articles</h1>
  <p>An article would go here, need to setup firebase</p>`);
});

module.exports = router;
