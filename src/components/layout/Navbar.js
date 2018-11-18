import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
  componentDidMount() {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav);

    // Scrollspy
    const spy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(spy, {});
  }
  render() {
    const { auth, profile } = this.props;
    //console.info(auth);
    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper grey darken-3">
            <div className="container">
              <Link to="/" className="brand-logo">
                KitchenFire
              </Link>
              <Link to="" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down scrollspy">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#search">Search</a>
                </li>
                <li>
                  <a href="#popular">Popular Recipes</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>{links}</li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav sidenav-close" id="mobile-nav">
          <li>
            <div className="user-view">
              <div className="background" />
              <Link to="">
                <img className="circle" src="img/robot.png" alt="user" />
              </Link>
              <Link to="">
                <span className="black-text name">
                  {profile.firstName} {profile.lastName}
                </span>
              </Link>
            </div>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#search">Search</a>
          </li>
          <li>
            <a href="#popular">Popular Recipes</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <div class="divider" />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.info(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
