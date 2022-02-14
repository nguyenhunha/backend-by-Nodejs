import db from "../models/index";

let getHomePage = (req, res) => {

    try {
        let data = await db.User.findAll();
    } catch (error) {
        
    }
    
    return res.render('homepage.ejs');
}

module.exports = {getHomePage: getHomePage};