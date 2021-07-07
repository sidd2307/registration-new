"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _viewEngine = require("./configs/viewEngine");

var _viewEngine2 = _interopRequireDefault(_viewEngine);

var _web = require("./routes/web");

var _web2 = _interopRequireDefault(_web);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _connectFlash = require("connect-flash");

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();


var app = (0, _express2.default)();

// Enable body parser post data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// config session
app.use((0, _expressSession2.default)({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// Enable flash message
app.use((0, _connectFlash2.default)());

//Config view engine
(0, _viewEngine2.default)(app);

// config passport middleware
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

// init all web routes
(0, _web2.default)(app);

var port = process.env.PORT || 8080;
app.listen(port, function () {
    return console.log("Building a login system with NodeJS is running on port " + port + "!");
});
//# sourceMappingURL=server.js.map