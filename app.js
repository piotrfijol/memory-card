const express = require("express");
const app = express();

const PORT = 5500;
const HOSTNAME = '127.0.0.1';

app.use(express.static("build"));

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});