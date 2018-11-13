import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

class SignedInLinks extends Component {
  componentDidMount() {
    const drop = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(drop, {
      hover: true
    });
  }
  render() {
    return (
      <ul className="">
        <li>
          <Link
            to=""
            className="dropdown-trigger btn btn-floating blue lighten-1"
            data-target="dropdown1"
          >
            {this.props.profile.initials}
          </Link>
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <NavLink to="/create">New Recipe</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <Link to="#" onClick={this.props.signOut}>
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
// mapStateToProps is the first param, hence the null
