class StudentController {
    static getHomePage = (req, res) => {
        res.render('index', { title: 'Home Page' });
    } 

    static getEditPage = (req, res) => {
        res.render('edit', { title: 'Edit Page' });
    }
}

module.exports = StudentController;