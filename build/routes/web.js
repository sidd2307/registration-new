"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _loginController = require("../controllers/loginController");

var _loginController2 = _interopRequireDefault(_loginController);

var _registerController = require("../controllers/registerController");

var _registerController2 = _interopRequireDefault(_registerController);

var _homePageController = require("../controllers/homePageController");

var _homePageController2 = _interopRequireDefault(_homePageController);

var _authValidation = require("../validation/authValidation");

var _authValidation2 = _interopRequireDefault(_authValidation);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportLocalController = require("../controllers/passportLocalController");

var _passportLocalController2 = _interopRequireDefault(_passportLocalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Changes Start
var router = _express2.default.Router();
// Changes End


(0, _passportLocalController2.default)();

var initWebRoutes = function initWebRoutes(app) {
    // Changes Start
    router.get("/", _loginController2.default.checkLoggedIn, _homePageController2.default.getHomePage);
    router.get("/login", _loginController2.default.checkLoggedOut, _loginController2.default.getLoginPage);
    // Changes End
    router.post("/login", _passport2.default.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));
    router.get("/register", _registerController2.default.getRegisterPage);
    router.post("/register", _authValidation2.default.validateRegister, _registerController2.default.createNewUser);
    // Changes Start
    router.post("/logout", _loginController2.default.postLogOut);
    return app.use("/", router);
};
module.exports = initWebRoutes;
//# sourceMappingURL=web.js.map