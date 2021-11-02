const express = require("express");
// Initiate Express
const app = express();
//Setting port - dynamically with heroku
port = process.env.PORT || 4000;

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
