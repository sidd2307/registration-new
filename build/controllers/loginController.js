"use strict";

var getLoginPage = function getLoginPage(req, res) {
    return res.render("login.ejs", {
        errors: req.flash("errors")
    });
};

var checkLoggedOut = function checkLoggedOut(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

var checkLoggedIn = function checkLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

var postLogOut = function postLogOut(req, res) {
    req.session.destroy(function (err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getLoginPage: getLoginPage,
    checkLoggedOut: checkLoggedOut,
    checkLoggedIn: checkLoggedIn,
    postLogOut: postLogOut
};
//# sourceMappingURL=loginController.js.map