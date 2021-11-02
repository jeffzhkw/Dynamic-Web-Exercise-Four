const express = require("express");

const router = express.Router();

// TODO: hook up to firebase for a POST requrest to create a single article.
router.get("/", (req, res) => {
  res.send(`
  <h1>Create Post</h1>
  <form>
  <div>
  <label for="articleTitle">Article Title</label>
  <input type="text" name="articleTitle" placeholder="type article title...">
  </div>
  <button type="submit"> Submit Article</button>
  </form>`);
  // ?articleTitle=asdf
});

module.exports = router;
