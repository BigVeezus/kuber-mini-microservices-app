const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const eventBusData = [];

app.post("/events", (req, res) => {
  const event = req.body;

  eventBusData.push(event);

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:5000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:7000/events", event).catch((err) => {
    console.log(err.message);
  });

  axios.post("http://localhost:8000/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "ok" });
});

app.get("/events", (req, res) => {
  res.send(eventBusData);
});

app.listen(2000, () => {
  console.log("Event bus is listening at 2000");
});
