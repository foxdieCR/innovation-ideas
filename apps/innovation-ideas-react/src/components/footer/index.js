import React from 'react'
import { withRouter } from 'react-router-dom'

const Footer = ({ location }) => {
  return (
    <footer
      style={{
        backgroundColor: location.pathname === '/' ? '#07263B' : '#f4f4f4',
      }}
    >
      <div
        name="line"
        style={{
          backgroundColor: '#2B6A7C',
          height: 2,
          width: '97%',
          margin: '0 auto',
        }}
      />
      <p
        style={{
          textAlign: 'center',
          color: '#2A697B',
          margin: 0,
          padding: 20,
          fontSize: 14,
        }}
      >
        InnovationIdeas. 2019. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default withRouter(Footer)
