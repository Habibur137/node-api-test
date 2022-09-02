const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const userRouter = require("./routes/users.routes.js");

app.use([cors(), express.json()]);
app.use("/user", userRouter);

app.all("*", (_req, res) => {
  res.send("No Path Found");
});
app.listen(port, () => {
  console.log("app running");
});
