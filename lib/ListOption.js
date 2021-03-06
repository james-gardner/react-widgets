'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListOption = _react2.default.createClass({
  displayName: 'ListOption',

  propTypes: {
    dataItem: _react2.default.PropTypes.any,
    focused: _react2.default.PropTypes.bool,
    selected: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    readOnly: _react2.default.PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var focused = _props.focused;
    var selected = _props.selected;
    var disabled = _props.disabled;
    var readOnly = _props.readOnly;

    var props = _objectWithoutProperties(_props, ['className', 'children', 'focused', 'selected', 'disabled', 'readOnly']);

    var classes = {
      'rw-state-focus': focused,
      'rw-state-selected': selected,
      'rw-state-disabled': disabled,
      'rw-state-readonly': readOnly
    };

    return _react2.default.createElement(
      'li',
      _extends({
        role: 'option',
        tabIndex: !(disabled || readOnly) ? '-1' : undefined,
        'aria-selected': !!selected,
        className: (0, _classnames2.default)('rw-list-option', className, classes)
      }, props),
      children
    );
  }
});

exports.default = ListOption;
module.exports = exports['default'];