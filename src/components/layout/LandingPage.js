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

    // Scrollspy
    const spy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(spy, {});
  }
  render() {
    return (
      <div id="home" className="scrollspy">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="http://lorempixel.com/400/200/food" alt="random food" />
              <div className="caption center-align">
                <h2>Store all your recipes in the cloud!</h2>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/1"
                alt="random food"
              />
              <div className="caption left-align">
                <h4>Never lose a recipe again!</h4>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/2"
                alt="random food"
              />
              <div className="caption right-align">
                <h4>Share your recipes with family and friends!</h4>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="http://lorempixel.com/400/200/food/3"
                alt="random food"
              />
              <div className="caption center-align">
                <h4>Access your recipes from anywhere!</h4>
                <h5 className="light grey-text text-lighten-3">
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
                  <h4>Connect</h4>
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
        <section id="popular" className="section section-popular scrollspy">
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
        {/* Contact */}
        <section id="contact" className="section section-contact scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <div className="card-panel grey white-text center">
                  <i className="material-icons">email</i>
                  <h5>Contct us for specials</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt esse odit illum sunt vel soluta incidunt error
                    totam explicabo qui?
                  </p>
                </div>
                <ul className="collection with-header">
                  <li className="collection-header">
                    <h4>Location</h4>
                  </li>
                  <li className="collection-item">KitchenFire LTD.</li>
                  <li className="collection-item">555 Beach Rd, Suite 33</li>
                  <li className="collection-item">Miami, FL 55555</li>
                </ul>
              </div>
              <div className="col s12 m6">
                <div className="card-panel grey lighten-3">
                  <h5>Please fill out this form</h5>
                  <div className="input-field">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="input-field">
                    <textarea
                      className="materialize-textarea"
                      placeholder="Enter message"
                    />
                  </div>
                  <input type="submit" value="Submit" className="btn" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="section grey darken-2 white-text center">
          <p className="flow-text">KitchenFire &copy; 2018</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
