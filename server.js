const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello from @BFC_APP_DOMAIN@!</h1>");
});

const listener = app.listen(80, () => {
  console.log("listening on port 80");
});

process.on("SIGTERM", () => {
  listener.close(() => {});
});
