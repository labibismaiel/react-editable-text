'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Editable2 = require('./Editable');

var _Editable3 = _interopRequireDefault(_Editable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableLine = function (_Editable) {
  _inherits(EditableLine, _Editable);

  function EditableLine() {
    _classCallCheck(this, EditableLine);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EditableLine).apply(this, arguments));
  }

  _createClass(EditableLine, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'input-group react-editable-text line' },
        function () {
          if (_this2.state.editable) {
            return _react2.default.createElement(
              'span',
              { className: 'input-group-btn' },
              _react2.default.createElement('button', { className: _this2.props.cancelBtnClass, type: 'button', onClick: function onClick(e) {
                  _this2.onClickCancel(e);
                }, dangerouslySetInnerHTML: _this2.getInnerHtml(_this2.props, 'cancelLabel') })
            );
          } else if (_this2.props.label) {
            return _react2.default.createElement('span', { className: 'input-group-addon', dangerouslySetInnerHTML: _this2.getInnerHtml(_this2.props, 'label') });
          }
        }(),
        _react2.default.createElement('input', { onClick: function onClick(e) {
            return _this2.onClickEdit(e);
          }, onKeyDown: function onKeyDown(e) {
            return _this2.onKeyDown(e);
          }, onKeyUp: function onKeyUp(e) {
            return _this2.onKeyUp(e);
          }, onKeyPress: function onKeyPress(e) {
            return _this2.onKeyPress(e);
          }, type: 'text', ref: 'element', className: 'form-control', disabled: this.state.saving ? "disabled" : null, readOnly: this.state.editable ? null : "readOnly", value: this.state.value, onChange: function onChange(e) {
            _this2.onChangeValue(e);
          } }),
        _react2.default.createElement(
          'span',
          { className: 'input-group-btn' },
          function () {
            if (_this2.state.editable) {
              return _react2.default.createElement('button', { className: _this2.props.saveBtnClass, type: 'button', onClick: function onClick(e) {
                  _this2.onClickSave(e);
                }, dangerouslySetInnerHTML: _this2.getInnerHtml(_this2.props, 'saveLabel') });
            } else {
              return _react2.default.createElement('button', { className: _this2.props.editBtnClass, type: 'button', onClick: function onClick(e) {
                  _this2.onClickEdit(e);
                }, dangerouslySetInnerHTML: _this2.getInnerHtml(_this2.props, 'editLabel') });
            }
          }()
        )
      );
    }
  }]);

  return EditableLine;
}(_Editable3.default);

exports.default = EditableLine;