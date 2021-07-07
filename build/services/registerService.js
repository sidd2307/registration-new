"use strict";

var _connectDB = require("../configs/connectDB");

var _connectDB2 = _interopRequireDefault(_connectDB);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _async = require("async");

var _connectFlash = require("connect-flash");

var _connectFlash2 = _interopRequireDefault(_connectFlash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createNewUser = function createNewUser(user) {
    return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
            var check, salt, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return checkEmailUser(user.email);

                        case 3:
                            check = _context.sent;

                            if (check) {
                                reject("This email \"" + user.email + "\" already exists. Please choose another email!");
                            } else {
                                // hash the users password
                                salt = _bcryptjs2.default.genSaltSync(10);
                                data = {
                                    fullname: user.fullname,
                                    email: user.email,
                                    password: _bcryptjs2.default.hashSync(user.password, salt)
                                };


                                _connectDB2.default.query("INSERT INTO users set ? ", data, function (error, rows) {
                                    if (error) {
                                        reject(error);
                                    }
                                    resolve("Created a new user successfully!");
                                });
                            }
                            _context.next = 10;
                            break;

                        case 7:
                            _context.prev = 7;
                            _context.t0 = _context["catch"](0);

                            reject(_context.t0);

                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 7]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
};

var checkEmailUser = function checkEmailUser(email) {
    return new Promise(function (resolve, reject) {
        try {
            _connectDB2.default.query("SELECT * from users where email = ?", email, function (error, rows) {
                if (error) {
                    reject(error);
                }
                if (rows.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewUser: createNewUser
};
//# sourceMappingURL=registerService.js.map