import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Recipes from "../recipe/Recipes";
import { getAllRecipesByUser } from "../../actions/recipeActions";

const Dashboard = ({ getAllRecipesByUser, recipe: { recipes }, match }) => {
  useEffect(() => {
    getAllRecipesByUser(match.params.id);
  }, [getAllRecipesByUser, match.params.id]);

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

Dashboard.propTypes = {
  getAllRecipesByUser: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  recipe: state.recipe
});
export default connect(
  mapStateToProps,
  { getAllRecipesByUser }
)(Dashboard);
