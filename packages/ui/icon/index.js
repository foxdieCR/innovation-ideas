'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _core = require('@emotion/core')

var _svgs = _interopRequireDefault(require('./svgs'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
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

/* eslint react/no-array-index-key: 0 */
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#0BA5C1' : _ref$color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 30 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 30 : _ref$height,
    size = _ref.size,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, [
      'name',
      'color',
      'width',
      'height',
      'size',
      'style',
    ])

  var icon = _svgs['default'][name]
  var widthIcon = width
  var heightIcon = height

  if (size) {
    widthIcon = size
    heightIcon = size
  }

  return (0, _core.jsx)(
    'svg',
    _extends(
      {
        css: style ? (0, _core.css)(style) : '',
        width: widthIcon,
        height: heightIcon,
        viewBox: icon.viewBox,
        transform: icon.transform,
      },
      props,
    ),
    (0, _core.jsx)(
      'g',
      null,
      icon.paths.map(function(path, index) {
        return (0, _core.jsx)('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          key: name + index,
          fill: color,
          d: path,
        })
      }),
    ),
  )
}

var _default = Icon
exports['default'] = _default
