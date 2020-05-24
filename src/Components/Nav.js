import React from 'react';
import {
  Link
} from "react-router-dom";
import './Nav.css';
import logo from '../Assets/webdxd.png'
import avatar from '../Assets/avatar.jpg'

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="container nav-container">
          <ul>
            <li><Link to='/'><img className="logo" src={logo} alt="webdxd" /></Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <div>
            <Link to='/profile'><img className="avatar-sm" src={avatar} alt="avatar" /></Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
