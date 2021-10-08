const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello from 95d78025-476f-493a-862f-e717a3089aba!</h1>");
});

const listener = app.listen(80, () => {
  console.log("listening on port 80");
});

process.on("SIGTERM", () => {
  listener.close(() => {});
});
