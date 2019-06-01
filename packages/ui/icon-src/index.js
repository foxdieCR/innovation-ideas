/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import svgs from './svgs'

/* eslint react/no-array-index-key: 0 */
const Icon = ({
  name,
  color = '#0BA5C1',
  width = 30,
  height = 30,
  size,
  style,
  ...props
}) => {
  const icon = svgs[name]
  let widthIcon = width
  let heightIcon = height

  if (size) {
    widthIcon = size
    heightIcon = size
  }

  return (
    <svg
      css={style ? css(style) : ''}
      width={widthIcon}
      height={heightIcon}
      viewBox={icon.viewBox}
      transform={icon.transform}
      {...props}
    >
      <g>
        {icon.paths.map((path, index) => (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            key={name + index}
            fill={color}
            d={path}
          />
        ))}
      </g>
    </svg>
  )
}

export default Icon
