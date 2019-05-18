import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Recipes from "../recipe/Recipes";
import { getAllRecipes } from "../../actions/recipeActions";

const Landing = ({ getAllRecipes, auth, recipe: { recipes } }) => {
  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  return (
    <div className="section">
      {auth.isAuthenticated ? (
        <Link
          to="/create"
          style={{ margin: "10px 20px" }}
          className="waves-effect green waves-light btn-small right"
        >
          <i className="material-icons left">add</i>Add Recipe
        </Link>
      ) : (
        ""
      )}

      <div className="row">
        <div className="col s12">
          {recipes.length > 0 ? (
            <Recipes allRecipes={recipes} />
          ) : (
            <h6>No Recipe Found!</h6>
          )}
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = state => ({
  getAllRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
});

const mapStateToProps = state => ({
  recipe: state.recipe,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getAllRecipes }
)(Landing);
