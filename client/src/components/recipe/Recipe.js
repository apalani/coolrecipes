import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRecipeById } from "../../actions/recipeActions";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ getRecipeById, recipe, auth, match }) => {
  useEffect(() => {
    console.log(match.params.id);
    getRecipeById(match.params.id);
  }, [getRecipeById, match.params.id]);
  return (
    <Fragment>
      <RecipeDetails recipe={recipe} />
    </Fragment>
  );
};

Recipe.propTypes = {
  getRecipeById: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getRecipeById }
)(Recipe);
