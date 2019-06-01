'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.NavbarLink = exports.NavbarLogo = exports.NavbarDivider = exports.NavbarGroup = exports.Navbar = void 0

var _react = _interopRequireDefault(require('react'))

var _core = require('@emotion/core')

var _styled = _interopRequireDefault(require('@emotion/styled'))

var _navbar = _interopRequireDefault(require('../styles/navbar'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {}
  var target = _objectWithoutPropertiesLoose(source, excluded)
  var key, i
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
      target[key] = source[key]
    }
  }
  return target
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  }
  return self
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  border-bottom: 3px solid #fabc3c;\n  padding-bottom: 6px;\n  width: 85%;\n  margin: 0 auto;\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  )
}

var NavContext = _react['default'].createContext()

var Active = _styled['default'].div(_templateObject())

var Navbar =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Navbar, _React$Component)

    function Navbar() {
      _classCallCheck(this, Navbar)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Navbar).apply(this, arguments),
      )
    }

    _createClass(Navbar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            rest = _objectWithoutProperties(_this$props, ['children'])

          return (0, _core.jsx)(
            NavContext.Provider,
            {
              value: rest,
            },
            (0, _core.jsx)(
              'div',
              {
                css: _navbar['default'],
              },
              (0, _core.jsx)(
                'nav',
                {
                  className: 'nav',
                },
                children,
              ),
            ),
          )
        },
      },
    ])

    return Navbar
  })(_react['default'].Component)

exports.Navbar = Navbar

var NavbarGroup = function NavbarGroup(_ref) {
  var children = _ref.children,
    align = _ref.align
  var className = 'nav-group'

  if (align) {
    className += ' '.concat(align)
  }

  return (0, _core.jsx)(
    'div',
    {
      className: className,
    },
    children,
  )
}

exports.NavbarGroup = NavbarGroup

var NavbarLink = function NavbarLink(_ref2) {
  var children = _ref2.children,
    to = _ref2.to,
    _ref2$exact = _ref2.exact,
    exact = _ref2$exact === void 0 ? false : _ref2$exact,
    _ref2$under = _ref2.under,
    under = _ref2$under === void 0 ? true : _ref2$under
  return (0, _core.jsx)(NavContext.Consumer, null, function(_ref3) {
    var history = _ref3.history,
      location = _ref3.location
    var path = location.pathname
    var isActive = false
    /* underline? */

    if (under) {
      if (exact && path === to) {
        isActive = true
      }

      if (!exact && path.includes(to)) {
        isActive = true
      }
    }

    return (0, _core.jsx)(
      'div',
      {
        className: 'nav-link',
      },
      (0, _core.jsx)(
        'a',
        {
          className: 'link',
          onClick: function onClick() {
            return history.push(to)
          },
          role: 'link',
          tabIndex: '0',
        },
        children,
      ),
      isActive ? (0, _core.jsx)(Active, null) : '',
    )
  })
}

exports.NavbarLink = NavbarLink

var NavbarDivider = function NavbarDivider(_ref4) {
  var children = _ref4.children
  return (0, _core.jsx)(
    'span',
    {
      className: 'nav-link-divider',
    },
    children,
  )
}

exports.NavbarDivider = NavbarDivider

var NavbarLogo = function NavbarLogo(_ref5) {
  var children = _ref5.children
  return (0, _core.jsx)('figure', null, children)
}

exports.NavbarLogo = NavbarLogo
