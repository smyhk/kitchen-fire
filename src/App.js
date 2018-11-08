import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CreateRecipe from './components/recipes/CreateRecipe';
import RecipeDetails from './components/recipes/RecipeDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={CreateRecipe} />
            <Route exact path="/recipe/:id" component={RecipeDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
