'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _creator = require('../ethereum/creator');

var _creator2 = _interopRequireDefault(_creator);

var _ballot = require('../ethereum/ballot');

var _ballot2 = _interopRequireDefault(_ballot);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Kevin\\Desktop\\smart_contract\\ballot_project\\pages\\index.js?entry';


var BallotIndex = function (_Component) {
    (0, _inherits3.default)(BallotIndex, _Component);

    function BallotIndex() {
        (0, _classCallCheck3.default)(this, BallotIndex);

        return (0, _possibleConstructorReturn3.default)(this, (BallotIndex.__proto__ || (0, _getPrototypeOf2.default)(BallotIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(BallotIndex, [{
        key: 'renderBallot',
        value: function renderBallot() {

            var items = this.props.ballots.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/ballots/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }, 'View Vote')),
                    fluid: true
                };
            });

            console.log(items);
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Create a vote!'), _react2.default.createElement(_routes.Link, { route: '/ballots/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create a Vote',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }))), this.renderBallot()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var ballots;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _creator2.default.methods.getDeployedBallots().call();

                            case 2:
                                ballots = _context.sent;
                                return _context.abrupt('return', { ballots: ballots });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return BallotIndex;
}(_react.Component);

exports.default = BallotIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0b3IiLCJCYWxsb3QiLCJMYXlvdXQiLCJDYXJkIiwiQnV0dG9uIiwiTGFiZWwiLCJMaW5rIiwiQmFsbG90SW5kZXgiLCJpdGVtcyIsInByb3BzIiwiYmFsbG90cyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsInJlbmRlckJhbGxvdCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEJhbGxvdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozt1Q0FPYSxBQUVYOztnQkFBSSxhQUFRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSyxVQUFBLEFBQUMsU0FBWSxBQUM3Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNJLEFBQUMsOEJBQUsscUJBQU4sQUFBeUI7c0NBQXpCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkwsQUFHQyxBQUNJLEFBR1I7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBRlIsQUFBWSxBQVlaLGFBWlk7O29CQVlaLEFBQVEsSUFBUixBQUFZLEFBQ1o7aURBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ2MsQUFDVjt5QkFGSixBQUVjLEFBQ1Y7c0JBSEosQUFHVyxBQUNQO3lCQUpKLEFBSWU7OzhCQUpmO2dDQUpaLEFBRUksQUFDSSxBQUNJLEFBUVA7QUFSTztBQUNJLHVCQVB4QixBQUNJLEFBQ0ksQUFZSyxBQUFLLEFBSXJCOzs7Ozs7Ozs7Ozs7dUNBMUN5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IscUIsQUFBaEIsQUFBcUM7O2lDQUFyRDtBO2lFQUVDLEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNmLEEsQUEvQzBCOztrQkErQzFCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS2V2aW4vRGVza3RvcC9zbWFydF9jb250cmFjdC9iYWxsb3RfcHJvamVjdCJ9