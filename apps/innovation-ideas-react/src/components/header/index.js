import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Navbar,
  NavbarLogo,
  NavbarGroup,
  NavbarLink,
  NavbarDivider,
} from '@innovation-ideas/ui/core/Navbar'

const Header = props => {
  return (
    <Navbar {...props}>
      <NavbarGroup align="left">
        <NavbarLogo>
          <NavbarLink to="/" under={false}>
            {/* <img src={} alt="" /> */}
            TODO Image
          </NavbarLink>
        </NavbarLogo>
      </NavbarGroup>

      <NavbarGroup align="right">
        <NavbarLink to="/" exact>
          Home
        </NavbarLink>
        <NavbarLink to="/links">Generar link</NavbarLink>
        <NavbarLink to="/">TODO</NavbarLink>

        <NavbarDivider />

        {/* <HamburgerMenu /> */}
      </NavbarGroup>
    </Navbar>
  )
}

export default withRouter(Header)
