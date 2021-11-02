const express = require("express");
const router = express.Router();
const firebase = require("firebase/app");

//Init firebase database
const db = firebase.firestore();
//Reference to tht blog post collection created on firebase
const blogposts = db.collection("blogposts");
// TODO: Hook up firebase get all articles.
// Ge all articles from firebase.

router.get("/", (req, res) => {
  const blogpostArray = []; // Push document from blogposts into the blogposts array.

  //TODO: get blogposts JSON from firebase
  res.send(blogpostArray);
  res.send(`
  <h1>All Articles</h1>
  <p>Articles would go here, need to setup firebase</p>
  `);
});

module.exports = router;
