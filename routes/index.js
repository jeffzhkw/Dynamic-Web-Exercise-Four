const express = require("express");
const router = express.Router();

// TODO: Hook up firebase get all articles.
// Ge all articles from firebase.
router.get("/", (req, res) => {
  res.send(`
  <h1>All Articles</h1>
  <p>Articles would go here, need to setup firebase</p>
  `);
});

module.exports = router;
