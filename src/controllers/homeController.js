import db from "../models/index";

let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
    } catch (err) {

    }

    return res.render('homepage.ejs');
}

module.exports = { getHomePage: getHomePage };