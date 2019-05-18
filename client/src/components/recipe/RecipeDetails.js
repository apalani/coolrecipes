import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteRecipeById } from "../../actions/recipeActions";
import Ratings from "../ratings/Ratings";
class RecipeDetails extends Component {
  deleteRecipe = async id => {
    await this.props.deleteRecipeById(id);
    this.props.history.push(`/`);
  };

  render() {
    const { auth } = this.props;
    const { recipe } = this.props.recipe;

    let isLoggedIn = false;

    if (
      auth.isAuthenticated &&
      auth.user &&
      auth.user.id &&
      recipe &&
      auth.user.id === recipe.postedBy
    ) {
      isLoggedIn = true;
    }

    return (
      <div>
        {recipe ? (
          <div className="section">
            <div className="row">
              <div className="col s8">
                <h4>{recipe.name}</h4>
              </div>
              <div className="col s4">
                {isLoggedIn ? (
                  <h4 className="right">
                    {/* <button
                      onClick={() => this.deleteRecipe(recipe._id)}
                      className="waves-effect green waves-light btn-small"
                    >
                      <i className="material-icons left">edit</i>Edit
                    </button> */}
                    <button
                      onClick={() => this.deleteRecipe(recipe._id)}
                      className="waves-effect red waves-light btn-small"
                    >
                      <i className="material-icons left">delete</i>Delete
                    </button>
                  </h4>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row">
              <div className="col s8">
                <img
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  className="z-depth-3 responsive-img"
                  src={recipe.imageUrl}
                  alt={recipe.name}
                />
              </div>
              <div className="col s4">
                <iframe
                  className="z-depth-3"
                  title="RecipeVideo"
                  width="100%"
                  height="400px"
                  src={recipe.videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <h6>
                  <i
                    style={{ verticalAlign: "text-bottom" }}
                    className="material-icons"
                  >
                    access_time
                  </i>{" "}
                  Prep : {recipe.prepTimeinMins}m | Cook :{" "}
                  {recipe.cookTimeinMins}m | Ready :{" "}
                  {recipe.prepTimeinMins + recipe.cookTimeinMins}m
                </h6>
              </div>
              <div className="col s4">
                <h6 className="right">
                  <i
                    style={{ verticalAlign: "text-bottom" }}
                    className="material-icons"
                  >
                    turned_in_not
                  </i>{" "}
                  {recipe.category}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <h5>
                  <i
                    style={{ verticalAlign: "text-bottom" }}
                    className="material-icons"
                  >
                    add_circle_outline
                  </i>{" "}
                  Ingredients
                </h5>
              </div>
              <div className="col s6">
                <h5 className="right">
                  <Ratings ratings={recipe.ratings} />
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <ul className="collection">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li className="collection-item" key={index}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <h5>
                  <i
                    style={{ verticalAlign: "text-bottom" }}
                    className="material-icons"
                  >
                    directions
                  </i>{" "}
                  Directions
                </h5>
                <ul>
                  {recipe.description.map((description, index) => (
                    <li style={{ padding: "5px" }} key={index}>
                      <i
                        style={{ verticalAlign: "text-bottom" }}
                        className="material-icons"
                      >
                        adjust
                      </i>{" "}
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div />
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  deleteRecipeById: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  recipe: state.recipe,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deleteRecipeById }
)(withRouter(RecipeDetails));
