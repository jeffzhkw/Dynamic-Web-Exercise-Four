const express = require("express");
const app = express();

port = 4000;
// app.get("/", (req, res) => {
//   res.send(`<p>hello world</p>`);
// });

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.`);
});
