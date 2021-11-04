const express = require("express");
// Initiate Express
const app = express();
//Setting port - dynamically with heroku
port = process.env.PORT || 4000;

//Import firebase
const firebase = require("firebase/app");
//Get configuration object so we can communicate with Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD73OxLyJqvEkV1wTNtcCLCcyXuAYxk3Io",
  authDomain: "dynamic-web-exercise-fou-b6e9c.firebaseapp.com",
  projectId: "dynamic-web-exercise-fou-b6e9c",
  storageBucket: "dynamic-web-exercise-fou-b6e9c.appspot.com",
  messagingSenderId: "723704793571",
  appId: "1:723704793571:web:1f17b99242c054386db8d6",
};
//Init firebase
firebase.initializeApp(firebaseConfig); //const app = initializeApp(firebaseConfig);

//Routes for directing user to correct place
const indexRouter = require("./routes/index");
const articleRouter = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

//Tell express to use routes
app.use("/", indexRouter);
app.use("/article", articleRouter);
app.use("/create", createArticleRoute);

//Listen for requrest on the port - if a user visits then send a result.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
