import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <ul className="">
      <li>
        <NavLink to="/create">New Recipe</NavLink>
      </li>
      <li>
        <Link to="#" onClick={props.signOut}>
          Logout
        </Link>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

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
