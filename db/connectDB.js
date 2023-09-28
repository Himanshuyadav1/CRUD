const mongoose = require('mongoose');

// Function for connection to DB using mongoose
async function connectDB(uri) {
    // try-catch block for handeling error
    try {
        const options = {
            dbName: 'mySchool'
        }

        // mongoose's connect method for DB connection with options in async-await
        await mongoose.connect(uri, options);
        console.log('Connected to DB Successfully!!');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;