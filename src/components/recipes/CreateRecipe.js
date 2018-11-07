import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createRecipe } from '../../store/actions/recipeActions';

class CreateRecipe extends Component {
  constructor(state) {
    super(state);
    state = {
      title: '',
      conent: ''
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.info(this.state);
    this.props.createRecipe(this.state);
    this.props.history.push('/'); // Redirect user to home after submit
  };
  render() {
    const { auth } = this.props;
    // Reirect user to login page if not signed in
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Recipe</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Recipe Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: recipe => dispatch(createRecipe(recipe))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRecipe);
