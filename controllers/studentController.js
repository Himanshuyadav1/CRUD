class StudentController {
    static getAllDoc = (req, res) => {
        res.render('index', { title: 'Home Page' });
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