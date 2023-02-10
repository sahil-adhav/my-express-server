const express = require("express");
const app = express();
const port = 1611;

app.get("/", (req, res) => {
    app.send("<h1>Ayo you did it.</h1>");
});

app.listen(port, () => {
    console.log(`Port running at ${port}.`);
});