import React, { useState } from 'react'
import "../style/Navbar.css"
// import Link from './Link'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <i>React Hooks</i>
          </a>
          <div className="nav_items"> <Link to="/">Accordion</Link> </div>
          <div className="nav_items"> <Link to="/dropdown">Dropdown</Link> </div>
          <div className="nav_items"><Link to="/count">Count</Link></div>
          <div className="nav_items"><Link to="/translate">Translate</Link></div>
          <div className="nav_items"><Link to="/list">Search</Link></div>
        </div>
      </nav>
    </div>
  )
}
