'use strict';

exports.__esModule = true;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UV = require('react-proptypes-url-validator');
console.log(UV);
var FNR = (_temp = _class = function (_React$Component) {
    _inherits(FNR, _React$Component);

    function FNR(props) {
        _classCallCheck(this, FNR);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.fetch = function () {
            var _this$props = _this.props,
                method = _this$props.method,
                url = _this$props.url,
                data = _this$props.data;

            var $ = _this;
            (0, _axios2.default)({
                method: method,
                url: url,
                data: data
            }).then(function (res) {
                var newState = {};
                // Always a log is needed for debug 😐
                // console.log(res);
                newState.loaded = true;
                var status = res.status;

                if (status === 200) {
                    newState.error = null;
                    newState.data = res.data;
                } else {
                    newState.data = null;
                    newState.error = res.status;
                }
                $.setState(newState);
            });
        };

        _this.state = {
            loaded: false,
            data: null,
            error: null
        };
        return _this;
    }

    FNR.prototype.componentDidMount = function componentDidMount() {
        this.fetch();
    };

    FNR.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        this.forceUpdate();
        this.fetch();
        return true;
    };

    FNR.prototype.render = function render() {
        var _state = this.state,
            loaded = _state.loaded,
            error = _state.error,
            data = _state.data;

        if (loaded) {
            if (!error) {
                return this.props.component(data, this.props.url);
            } else {
                return this.props.errorComponent();
            }
        } else {
            return this.props.loadingComponent();
        }
    };

    return FNR;
}(_react2.default.Component), _class.defaultProps = {
    method: 'get',
    loadingComponent: function loadingComponent(props) {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    },
    errorComponent: function errorComponent(props) {
        return _react2.default.createElement(
            'div',
            null,
            'Error'
        );
    }
}, _temp);
FNR.propTypes = process.env.NODE_ENV !== "production" ? {
    method: _propTypes2.default.oneOf(['get', 'post']),
    url: UV,
    component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired,
    loadingComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
    errorComponent: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func])
} : {};
exports.default = FNR;
module.exports = exports['default'];