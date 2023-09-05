const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set the views directory
//app.set('views', path.join(__dirname, 'views'));

// Set the view engine to use HTML files
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Views')));
//app.set('view engine', 'loader.html');

// Define routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'Views', 'whyus.html'));
});

app.get('/whyus', function(req, res) {
    res.sendFile(path.join(__dirname, 'Views', 'whyus.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});