"use strict";

var _nodemon = require("nodemon");

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require("passport-local");

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _loginService = require("../services/loginService");

var _loginService2 = _interopRequireDefault(_loginService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var localStrategy = _passportLocal2.default.Strategy;

var initPassportLocal = function initPassportLocal() {
    _passport2.default.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, email, password, done) {
            var user, match;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _loginService2.default.findUserByEmail(email);

                        case 3:
                            user = _context.sent;

                            if (user) {
                                _context.next = 6;
                                break;
                            }

                            return _context.abrupt("return", done(null, false, req.flash("errors", "This user email \"" + email + "\" doesn't exist")));

                        case 6:
                            if (!user) {
                                _context.next = 15;
                                break;
                            }

                            _context.next = 9;
                            return _loginService2.default.comparePasswordUser(user, password);

                        case 9:
                            match = _context.sent;

                            if (!(match === true)) {
                                _context.next = 14;
                                break;
                            }

                            return _context.abrupt("return", done(null, user, null));

                        case 14:
                            return _context.abrupt("return", done(null, false, req.flash("errors", match)));

                        case 15:
                            _context.next = 20;
                            break;

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context["catch"](0);
                            return _context.abrupt("return", done(null, false, err));

                        case 20:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 17]]);
        }));

        return function (_x, _x2, _x3, _x4) {
            return _ref.apply(this, arguments);
        };
    }()));
};

_passport2.default.serializeUser(function (user, done) {
    done(null, user.id);
});

_passport2.default.deserializeUser(function (id, done) {
    _loginService2.default.findUserById(id).then(function (user) {
        return done(null, user);
    }).catch(function (error) {
        return done(error, null);
    });
});

module.exports = initPassportLocal;
//# sourceMappingURL=passportLocalController.js.map