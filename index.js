const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const userRouter = require("./routes/users.routes.js");

app.use([cors(), express.json()]);
app.use("/user", userRouter);

// home route
app.get("/", (_req, res) => {
  res.send({ message: "home page" });
});

app.all("*", (_req, res) => {
  res.send("No Path Found");
});
app.listen(port, () => {
  console.log("app running");
});

const arr = [{ name: "habib", age: "20", id: 1 }];
const a = arr.find((b) => b.id === 1);
// console.log(a);
a.name = "lima";
console.log(arr);
console.log(a);
