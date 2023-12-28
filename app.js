const express = require('express');
const app = express();
const port = 3003;

const server = app.listen(port, () => console.log("Ser ver listening on port" + port));

app.get("/", (req, res, next) => {
    res.status(200).send("Hello");
});