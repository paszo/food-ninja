const express = require('express');
// const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const app = express();

// app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

app.use(express.static('public'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port ....');
});