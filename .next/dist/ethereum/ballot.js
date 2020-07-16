'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Ballot = require('./build/Ballot.json');

var _Ballot2 = _interopRequireDefault(_Ballot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Ballot2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxiYWxsb3QuanMiXSwibmFtZXMiOlsid2ViMyIsIkJhbGxvdCIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW1CLEFBQW5CLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILEtBQUssQUFBTCxNQUFXLGlCQUFPLEFBQWxCLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6ImJhbGxvdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9LZXZpbi9EZXNrdG9wL3NtYXJ0X2NvbnRyYWN0L2JhbGxvdF9wcm9qZWN0In0=