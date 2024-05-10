const user = require('../models/user.model');

// UPDATE http://localhost:3000/api/authors
const updateLoginTrue = async (req, res) => {
    const loginTrue = req.body; // {login}
    const response = await user.updateLoginTrue(loginTrue);
    res.status(200).json({
        "login_updated": response,
        data: loginTrue
    });
}

module.exports = {
    updateLoginTrue
    /* createAuthor,
    updateAuthor,
    deleteAuthor */
}