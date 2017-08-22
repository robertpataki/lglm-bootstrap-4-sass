const express = require('express');
const path = require('path');

// Create our app
const port = process.env.PORT || 3000;
const app = express();

// serve static assets normally
app.use(express.static(path.resolve(__dirname, 'dist/')));

app.listen(port, function () {
    console.log('Express server is up on port ' + port);
});
