"use strict";

var getHomePage = function getHomePage(req, res) {
    return res.render("homepage.ejs", {
        user: req.user
    });
};

module.exports = {
    getHomePage: getHomePage
};
//# sourceMappingURL=homePageController.js.map