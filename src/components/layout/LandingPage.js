import React, { Component } from 'react';
import M from 'materialize-css';

class LandingPage extends Component {
  componentDidMount() {
    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });

    // Autocomplete
    const autocomp = document.querySelector('.autocomplete');
    M.Autocomplete.init(autocomp, {
      data: {
        Tacos: null,
        Chicken: null,
        Beef: null,
        Shellfish: null,
        Fish: null
      }
    });
  }
  render() {
    return (
      <div className="">
        <div class="slider">
          <ul class="slides">
            <li>
              <img src="http://lorempixel.com/400/200/food" alt="random food" />
              <div class="caption center-align">
                <h2>Store all your recipes in the cloud!</h2>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/1"
                alt="random food"
              />
              <div class="caption left-align">
                <h4>Never lose a recipe again!</h4>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/2"
                alt="random food"
              />
              <div class="caption right-align">
                <h4>Share your recipes with family and friends!</h4>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/3"
                alt="random food"
              />
              <div class="caption center-align">
                <h4>Access your recipes from anywhere!</h4>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
        <section
          id="search"
          className="section section-search grey darken-3 white-text center scrollspy"
        >
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Search Recipes</h3>
                <div className="input-field">
                  <input
                    type="text"
                    className="white grey-text autocomplete"
                    id="autocomplete-input"
                    placeholder="Tacos, Chicken Marsalla, etc..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
