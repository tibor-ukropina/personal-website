const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/personal-website')));

// Handle all GET requests by sending back the Angular index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/personal-website/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
