import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const RecipeDetails = props => {
  const { recipe, auth } = props;
  // Reirect user to login page if not signed in
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (recipe) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{recipe.title}</span>
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {recipe.authorFirstName} {recipe.authorLastName}
            </div>
            <div>{moment(recipe.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading recipe...</p>
      </div>
    );
  }
};

const mapSateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null;
  return {
    recipe: recipe,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapSateToProps),
  firestoreConnect([{ collection: 'recipes' }])
)(RecipeDetails);
