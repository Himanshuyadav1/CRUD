const StudentModel = require('../models/StudentModel');

class StudentController {
    static getAllDoc = async (req, res) => {
        try {
            const results = await StudentModel.find();
            // console.log(results);
            res.render('index', { title: 'Home Page', results });
        } catch (error) {
            console.log(error);
        }        
    }

    static createDoc = async (req, res) => {
        try {
            // destructuring form data
            const { name, age, fees } = req.body;
            const student = new StudentModel({
                name: name,
                age: age,
                fees: fees
            });
            // Saving form data to DB
            await student.save();
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }

    static editDocById = (req, res) => {
        res.render('edit', { title: 'Edit Page' });
    }

    static deleteDocById = (req, res) => {
        res.redirect('/');
    }

    static updateDocById = (req, res) => {
        res.redirect('/');
    }
}

module.exports = StudentController;