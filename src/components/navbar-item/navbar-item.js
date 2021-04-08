import React, { Component, Fragment, Navbar, Brand } from 'react';
import './navbar-item.css';
import {Link} from 'react-router-dom' 

class NavbarItem extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">ContactBook</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/contact-list">Contact list</Link>
            <Link className="nav-item nav-link" to="/add-contact">Add contact</Link>
            <Link className="nav-item nav-link" to="/favorite">Favor Contact list</Link>

          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarItem;