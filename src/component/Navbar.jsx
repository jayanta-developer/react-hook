import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <i>React Hooks</i>
          </a>
        </div>
      </nav>
    </div>
  )
}
