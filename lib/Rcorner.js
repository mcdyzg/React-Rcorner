'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('E:\\mywebpack2\\node_modules\\babel-preset-react-hmre\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\mywebpack2\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\mywebpack2\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Rcorner: {
		displayName: 'Rcorner'
	}
};

var _EMywebpack2Node_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'Rcorner.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _EMywebpack2Node_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'Rcorner.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _EMywebpack2Node_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_EMywebpack2Node_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

// 父元素必须具有relative或absolute定位，和overflow:hidden

var Rcorner = _wrapComponent('Rcorner')((_temp = _class = function (_React$Component) {
	_inherits(Rcorner, _React$Component);

	function Rcorner(props, context) {
		_classCallCheck(this, Rcorner);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Rcorner).call(this, props, context));
	}

	_createClass(Rcorner, [{
		key: 'getStyle',
		value: function getStyle() {
			var style = {
				position: 'absolute',
				transform: this.props.position == 'right' ? 'rotate(45deg)' : 'rotate(-45deg)',
				textAlign: 'center',
				height: this.props.width || '80px',
				width: this.props.width || '80px',
				background: this.props.background || '#FA7862',
				lineHeight: this.props.width ? this.props.width * 1.75 + 'px' : '140px',
				right: this.props.position == 'right' ? -this.props.width / 2 || '-40px' : '',
				left: this.props.position == 'left' ? -this.props.width / 2 || '-40px' : '',
				top: -this.props.width / 2 || '-40px',
				color: this.props.color || '#fff',
				fontSize: this.props.fontSize || '16px',
				fontFamily: 'Microsoft Yahei'
			};
			return style;
		}
	}, {
		key: 'render',
		value: function render() {
			var style = this.getStyle();
			var styles = _extends({}, style, this.props.style);
			return _react3.default.createElement(
				'div',
				_extends({}, this.props, { style: styles }),
				this.props.word || 'hot'
			);
		}
	}]);

	return Rcorner;
}(_react3.default.Component), _class.defaultProps = {
	position: 'right'
}, _temp));

exports.default = Rcorner;