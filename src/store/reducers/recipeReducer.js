// Default state
const initState = {};

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.info('created recipe: ', action.recipe);
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.error('create recipe error', action.err);
      return state;
    default:
      return state;
  }
};

export default recipeReducer;
