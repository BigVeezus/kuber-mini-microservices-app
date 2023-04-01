const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const CommentCreated = async (type, data) => {
  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-srv:2000/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }
};

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  CommentCreated(type, data);

  res.send({});
});

app.listen(8000, async () => {
  console.log("Moderation on PORT 8000 bro");
  const res = await axios.get("http://event-bus-srv:2000/events");

  for (let event of res.data) {
    // console.log("Moderating events");
    CommentCreated(event.type, event.data);
  }
});
