export const createRecipe = recipe => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('recipes')
      .add({
        ...recipe,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_RECIPE', recipe: recipe });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_RECIPE_ERROR', err });
      });
  };
};
