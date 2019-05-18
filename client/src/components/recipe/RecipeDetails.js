import React, { Component } from "react";

class RecipeDetails extends Component {
  render() {
    const { recipe } = this.props.recipe;
    console.log(recipe);

    return <div>Recipe Details</div>;
  }
}

export default RecipeDetails;
