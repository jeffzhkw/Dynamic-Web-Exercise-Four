const express = require("express");
const router = express.Router();

//Import firebase
const firestore = require("firebase/firestore");
//Init firestore database
const db = firestore.getFirestore();
//get all articles from firebase
router.get("/", (req, res) => {
  const blogposts = firestore.getDocs(
    firestore.collection(db, "blogposts") // set "__blogposts__" on firebase website
  );

  const blogpostsArray = [];
  //blogposts is a function. call asychroniously
  blogposts
    .then((response) => {
      response.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (error) {
      console.log("Error", error);
      return res.send(error);
    });
});

module.exports = router;
