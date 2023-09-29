const mongoose = require('mongoose');

// Defining Schema for Student
const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5000.5 }
})

// Creating model with student collection name and studentschema
const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;