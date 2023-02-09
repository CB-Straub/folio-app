const express = require('express')
const path = require('path')
const port = process.env.PORT || 3001;




app.use(express.static(path.join(__dirname,  "build")))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,  "build", "index.html"));
});

app.listen(port)