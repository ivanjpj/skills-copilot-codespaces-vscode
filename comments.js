//Create a web server
const express = require('express');
const app = express();
const port = 3000;

//Create a GET route that returns the comments
app.get('/comments', (req, res) => {
    res.send('Comments will be here!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});