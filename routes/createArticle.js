const express = require("express");

const router = express.Router();

const form = `<h1>Create Post</h1>
<form action="/create/submit"> 
<div style="display: flex; flex-direction: column; margin-bottom: 20px; max-width:325px;">
<label for="articleTitle">Article Title</label>
<input type="text" name="articleTitle" placeholder="type article title...">
<label for="articleText">Article Text</label>
<input type="text" name="articleText" placeholder="type article text...">
<label for="author">Article Author</label>
<input type="text" name="author" placeholder="type authors...">
</div>
<button type="submit"> Submit Article</button>
</form>`;

// TODO: hook up to firebase for a POST requrest to create a single article.

//Require Firebase
const firestore = require("firebase/firestore");
//Reference DB
const db = firestore.getFirestore();

//Serves web form for users
router.get("/", (req, res) => {
  //relative to /create
  res.send(form);
});

//API Endpoint for subitting data through our form
// ?articleTitle=asdf: query param
router.get("/submit", (req, res) => {
  const queryParams = req.query; //Query params from URL
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const author = queryParams.author;

  //Create ID frrom title
  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase(); //replace all space to dash
  //Submit post to Firebase
  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "blogposts", idFromTitle),
    {
      title: title,
      text: text,
      author: author,
    }
  );

  setBlogPost
    .then((response) => {
      console.log("Success");
      res.send(`<h1>Submission Successful</h1>
      <p><a href="/create">Add Another Post</a></p>`);
    })
    .catch((error) => {
      res.send(error);
      res.send(`Error Submitting: ${error.toString()}`);
    });
  console.log({ idFromTitle, title, text, author });
  //If post successful, show message
  res.send("");
});

module.exports = router;
