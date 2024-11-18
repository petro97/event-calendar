import React from 'react'
import '../styles/app-footer.less' // Adjust the path to your LESS file

const AppFooter = () => {
  return (
    <footer className="app-footer">
      {' '}
      <div className="footer-logo">LOGO</div>{' '}
      <nav className="footer-menu">
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
    </footer>
  )
}

export default AppFooter
