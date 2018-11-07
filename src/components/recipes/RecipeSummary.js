// Displayed in a RecipeList component on the Dashboard
import React from 'react';
import moment from 'moment';

const RecipeSummary = ({ recipe }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{recipe.title}</span>
        <p>
          Posted by {recipe.authorFirstName} {recipe.authorLastName}
        </p>
        <p className="grey-text">
          {moment(recipe.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default RecipeSummary;
