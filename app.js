const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const database_url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';
const connectDB = require('./db/connectDB.js');


// Database Connection
connectDB(database_url);

// setting view engine to ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/edit', (req, res) => {
    res.render('edit', { title: 'Edit Page' });
});

app.listen(port, () => {
    console.log(`Running your server at http://localhost:${port}`);
});