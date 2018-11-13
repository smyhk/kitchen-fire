import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

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

    // Material Boxed
    const boxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(boxed, {});
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
        {/* Search box */}
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
        {/* Icon Boxes */}
        <section className="section section-icons grey lighten-4 center">
          <div className="container">
            <div className="row">
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="material-icons large grey-text">fastfood</i>
                  <h4>Chow Down!</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, nesciunt.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="material-icons large grey-text">store</i>
                  <h4>Recipe Shop</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, nesciunt.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card-panel">
                  <i className="material-icons large grey-text">wifi</i>
                  <h4>Connect With Us</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque, nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Recipes */}
        <section id="id" className="section section-popular scrollspy">
          <div className="container">
            <div className="row">
              <h4 className="center">
                <span className="grey-text">Popular</span> Recipes
              </h4>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="http://lorempixel.com/400/200/food" alt="food" />
                    <span className="card-title">Street Tacos</span>
                  </div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, possimus! Fugit aut voluptate est quis?
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="http://lorempixel.com/400/200/food" alt="food" />
                    <span className="card-title">Lazagna Beebop!</span>
                  </div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, possimus! Fugit aut voluptate est quis?
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src="http://lorempixel.com/400/200/food" alt="food" />
                    <span className="card-title">Reindeer Scat</span>
                  </div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum, possimus! Fugit aut voluptate est quis?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Social Media */}
        <section className="section section-follow grey darken-2 white-text center">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>Follow KitchenFire</h4>
                <p>Follow us on social media</p>
                <Link to="#" className="white-text">
                  <i className="fab fa-facebook fa-4x" />
                </Link>
                <Link to="#" className="white-text">
                  <i className="fab fa-twitter fa-4x" />
                </Link>
                <Link to="#" className="white-text">
                  <i className="fab fa-linkedin fa-4x" />
                </Link>
                <Link to="#" className="white-text">
                  <i className="fab fa-google-plus fa-4x" />
                </Link>
                <Link to="#" className="white-text">
                  <i className="fab fa-pinterest fa-4x" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section id="gallery" className="section section-gallery scrollspy">
          <div className="container">
            <h4 className="center">
              <span className="grey-text">Photo</span>Gallery
            </h4>
            <div className="row">
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?chicken,sandwich"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?food,taco"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?chili"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?bbq"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?beef"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?rice,cooked"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?ham"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?noodle"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?soup"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?potato"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?cookie"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
              <div className="col s12 m3">
                <img
                  src="https://source.unsplash.com/1600x900/?carrot"
                  alt=""
                  className="materialboxed responsive-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
