const express = require('express')
const app = express()

app.use("/", (req,res) => {
    res.send("server is running");
});

app.listen(5000, console.log("Server Started at PORT 5000"));