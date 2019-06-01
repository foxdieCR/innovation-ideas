/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

import style from '../styles/navbar'

const NavContext = React.createContext()

const Active = styled.div`
  border-bottom: 3px solid #fabc3c;
  padding-bottom: 6px;
  width: 85%;
  margin: 0 auto;
`

class Navbar extends React.Component {
  render() {
    const { children, ...rest } = this.props
    return (
      <NavContext.Provider value={rest}>
        <div css={style}>
          <nav className="nav">{children}</nav>
        </div>
      </NavContext.Provider>
    )
  }
}

const NavbarGroup = ({ children, align }) => {
  let className = 'nav-group'
  if (align) {
    className += ` ${align}`
  }
  return <div className={className}>{children}</div>
}

const NavbarLink = ({ children, to, exact = false, under = true }) => (
  <NavContext.Consumer>
    {({ history, location }) => {
      const { pathname: path } = location

      let isActive = false

      /* underline? */
      if (under) {
        if (exact && path === to) {
          isActive = true
        }
        if (!exact && path.includes(to)) {
          isActive = true
        }
      }

      return (
        <div className="nav-link">
          <a
            className="link"
            onClick={() => history.push(to)}
            role="link"
            tabIndex="0"
          >
            {children}
          </a>
          {isActive ? <Active /> : ''}
        </div>
      )
    }}
  </NavContext.Consumer>
)

const NavbarDivider = ({ children }) => (
  <span className="nav-link-divider">{children}</span>
)

const NavbarLogo = ({ children }) => <figure>{children}</figure>

export { Navbar, NavbarGroup, NavbarDivider, NavbarLogo, NavbarLink }
