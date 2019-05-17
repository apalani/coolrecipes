import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch("/api/recipe/all")
      .then(response => response.json())
      .then(data => this.setState({ recipes: data.recipes }));
  }
  render() {
    const { recipes } = this.state;
    console.log(recipes);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">Recipes goes here</div>
          {recipes.map(recipe => (
            <li>{recipe.name}</li>
          ))}
        </div>
      </div>
    );
  }
}
export default Landing;
