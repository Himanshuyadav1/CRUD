const StudentModel = require('../models/StudentModel');

class StudentController {
    static getAllDoc = async (req, res) => {
        try {
            const results = await StudentModel.find();
            console.log(results);
            res.render('index', { title: 'Home Page', results });
        } catch (error) {
            console.log(error);
        }        
    }

    static createDoc = (req, res) => {
        res.redirect('/');
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