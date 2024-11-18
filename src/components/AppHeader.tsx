import React from 'react'
import '../styles/app-header.less'

const AppHeader = () => {
  return (
    <header className="app-header">
      {' '}
      <div className="logo">LOGO</div>{' '}
      <nav className="menu">
        {' '}
        <ul>
          {' '}
          <li>
            <a href="#">Main</a>
          </li>{' '}
          <li>
            <a href="#">Events</a>
          </li>{' '}
          <li>
            <a href="#">Calendar</a>
          </li>{' '}
          <li>
            <a href="#">FAQ</a>
          </li>{' '}
        </ul>{' '}
      </nav>{' '}
    </header>
  )
}

export default AppHeader
