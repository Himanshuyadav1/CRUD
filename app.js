const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const database_url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';
const connectDB = require('./db/connectDB.js');

app.get('/', (req, res) => {
    res.send("Hello from server!!");
});

// Database Connection
connectDB(database_url);

app.listen(port, () => {
    console.log(`Running your server at http://localhost:${port}`);
});