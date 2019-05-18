import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Recipes from "../recipe/Recipes";
import { fetchAllRecipes } from "../../actions/recipeActions";

const Landing = ({ fetchAllRecipes, recipe: { recipes } }) => {
  useEffect(() => {
    fetchAllRecipes();
  }, [fetchAllRecipes]);

  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <Recipes allRecipes={recipes} />
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = state => ({
  fetchAllRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
});

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { fetchAllRecipes }
)(Landing);
