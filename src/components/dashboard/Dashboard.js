import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import Notifications from './Notifications';
import RecipeList from '../recipes/RecipeList';

class Dashboard extends Component {
  render() {
    // console.info(this.props);
    const { recipes, auth, notifications } = this.props;
    // Reirect user to login page if not signed in
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <RecipeList recipes={recipes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.info(state);
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
