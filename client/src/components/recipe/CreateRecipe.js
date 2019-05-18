import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipeActions";

class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      category: "",
      prepTimeinMins: 0,
      cookTimeinMins: 0,
      serves: 0,
      imageUrl: "",
      videoUrl: "",
      description: [],
      ingredients: []
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newRecipe = {
      name: this.state.name,
      category: this.state.category,
      prepTimeinMins: this.state.prepTimeinMins,
      cookTimeinMins: this.state.cookTimeinMins,
      serves: this.state.serves,
      imageUrl: this.state.imageUrl,
      videoUrl: this.state.videoUrl,
      description: this.state.description,
      ingredients: this.state.ingredients,
      postedBy: this.props.auth.user.id
    };
    this.props.addRecipe(newRecipe, this.props.history);
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "1rem" }} className="row">
          <div className="col s12">
            <div className="col s12">
              <h4>
                <b>Create Recipe</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Recipe Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.category}
                  id="category"
                  type="text"
                />
                <label htmlFor="category">Category</label>
              </div>
              <div className="input-field col s4">
                <input
                  onChange={this.onChange}
                  value={this.state.prepTimeinMins}
                  id="prepTimeinMins"
                  type="text"
                />
                <label htmlFor="prepTimeinMins">Prep Time</label>
              </div>
              <div className="input-field col s4">
                <input
                  onChange={this.onChange}
                  value={this.state.cookTimeinMins}
                  id="cookTimeinMins"
                  type="text"
                />
                <label htmlFor="cookTimeinMins">Cook Time</label>
              </div>
              <div className="input-field col s4">
                <input
                  onChange={this.onChange}
                  value={this.state.serves}
                  id="serves"
                  type="text"
                />
                <label htmlFor="serves">Serves</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  id="description"
                  type="text"
                />
                <label htmlFor="description">Direction</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.ingredients}
                  id="ingredients"
                  type="text"
                />
                <label htmlFor="videoUrl">Ingredients</label>
              </div>
              <div className="input-field col s6">
                <input
                  onChange={this.onChange}
                  value={this.state.imageUrl}
                  id="imageUrl"
                  type="text"
                />
                <label htmlFor="imageUrl">Image URL</label>
              </div>
              <div className="input-field col s6">
                <input
                  onChange={this.onChange}
                  value={this.state.videoUrl}
                  id="videoUrl"
                  type="text"
                />
                <label htmlFor="videoUrl">Video URL</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="waves-effect green hoverable waves-light btn-small"
                >
                  <i className="material-icons left">add</i>Create Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addRecipe }
)(withRouter(CreateRecipe));
