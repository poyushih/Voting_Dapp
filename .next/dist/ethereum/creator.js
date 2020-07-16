'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BallotCreator = require('./build/BallotCreator.json');

var _BallotCreator2 = _interopRequireDefault(_BallotCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_BallotCreator2.default.interface), '0xD82158fE480159A07013F927749C1a9f6eDE1c7f');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjcmVhdG9yLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJCYWxsb3RDcmVhdG9yIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTBCLEFBQTFCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2IsS0FBSyxBQUFMLE1BQVcsd0JBQWMsQUFBekIsQUFEYSxZQUViLEFBRmEsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJjcmVhdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tldmluL0Rlc2t0b3Avc21hcnRfY29udHJhY3QvYmFsbG90X3Byb2plY3QifQ==