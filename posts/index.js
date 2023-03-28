const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { randomBytes } = require("crypto");

app.use(bodyParser.json());

const posts = {
  elvis: "hey",
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000 my ski");
});
