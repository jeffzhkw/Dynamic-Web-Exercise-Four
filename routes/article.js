const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

// TODO:Get a single article by ID
// accessible at /article/:id
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "blogposts", postId));
  blogpost
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);

      return res.send(`not docs found`);
    })
    .catch((error) => {
      res.send(`Error`);
    });
});

router.get("/", (req, res) => {
  res.send(`Please include a an ID`);
});

module.exports = router;
