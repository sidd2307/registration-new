"use strict";

var _connectDB = require("../configs/connectDB");

var _connectDB2 = _interopRequireDefault(_connectDB);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var findUserByEmail = function findUserByEmail(email) {
    return new Promise(function (resolve, reject) {
        try {
            _connectDB2.default.query("SELECT * from users where email=?", email, function (error, rows) {
                if (error) {
                    reject(error);
                }
                var user = rows[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};

var comparePasswordUser = function comparePasswordUser(user, password) {
    return new Promise(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
            var isMatch;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _bcryptjs2.default.compare(password, user.password);

                        case 3:
                            isMatch = _context.sent;

                            if (isMatch) resolve(true);
                            resolve("The password you've entered is incorrect"); //changes======================================
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);

                            reject(_context.t0);

                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 8]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
};

var findUserById = function findUserById(id) {
    return new Promise(function (resolve, reject) {
        try {
            _connectDB2.default.query("SELECT * from users where id = ?", id, function (error, rows) {
                if (error) reject(error);
                var user = rows[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    comparePasswordUser: comparePasswordUser,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById
};
//# sourceMappingURL=loginService.js.map