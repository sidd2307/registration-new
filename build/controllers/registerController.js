"use strict";

var _expressValidator = require("express-validator");

var _registerService = require("../services/registerService");

var _registerService2 = _interopRequireDefault(_registerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getRegisterPage = function getRegisterPage(req, res) {
    return res.render("register.ejs", {
        errors: req.flash("errors")
    });
};

var createNewUser = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var errorsArr, validationErrors, errors, newUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // validate all required fields
                        errorsArr = [];
                        validationErrors = (0, _expressValidator.validationResult)(req);

                        if (validationErrors.isEmpty()) {
                            _context.next = 7;
                            break;
                        }

                        errors = Object.values(validationErrors.mapped());

                        errors.forEach(function (item) {
                            errorsArr.push(item.msg);
                        });
                        req.flash("errors", errorsArr);
                        return _context.abrupt("return", res.redirect("/register"));

                    case 7:
                        _context.prev = 7;
                        newUser = {
                            fullname: req.body.fullname,
                            email: req.body.email,
                            password: req.body.password
                        };
                        _context.next = 11;
                        return _registerService2.default.createNewUser(newUser);

                    case 11:
                        return _context.abrupt("return", res.redirect("/login"));

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](7);

                        req.flash("errors", _context.t0);
                        return _context.abrupt("return", res.redirect("/register"));

                    case 18:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[7, 14]]);
    }));

    return function createNewUser(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};
//# sourceMappingURL=registerController.js.map