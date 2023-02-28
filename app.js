const express = require('express')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

// Start the app predictfoot
app.listen(process.env.PORT || 8500, function() {
    console.log("app inlive with live  started")
})