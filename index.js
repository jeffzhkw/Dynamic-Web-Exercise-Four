const express = require("express");
const app = express();

port = process.env.PORT || 4000;

const indexRouter = require("./routes/index");
const articleRouter = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRouter);
app.use("/article", articleRouter);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
