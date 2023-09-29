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

    static editDocById = async (req, res) => {
        try {
            // getting id from params
            const { id } = req.params;

            // finding student data using id
            const student = await StudentModel.findById(id);
            // console.log(student);
            // passing student data to Edit page
            res.render('edit', { title: 'Edit Page', data: student });
        } catch (error) {
            console.log(error);
        }
    }
    
    static updateDocById = async (req, res) => {
        try {
            // getting id from params
            const { id } = req.params;
            // destructuring form data
            // const { name, age, fees } = req.body;

            // finding student data using id and updating it and for running validator set runValidators to true
            // await StudentModel.findByIdAndUpdate( id, {name, age, fees}, { runValidators: true });
            await StudentModel.findByIdAndUpdate( id, req.body, { runValidators: true });
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }
    
    static deleteDocById = (req, res) => {
        res.redirect('/');
    }
}

module.exports = StudentController;