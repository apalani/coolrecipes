import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ratings from "../ratings/Ratings";

class Recipes extends Component {
  render() {
    const { allRecipes } = this.props;

    return (
      <div>
        {allRecipes.map(recipe => (
          <div className="col s12 m6 l4" key={recipe._id}>
            <div className="card z-depth-3 hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <Link to={`/recipe/${recipe._id}`}>
                  <img
                    style={{ objectFit: "cover", height: "200px" }}
                    width="305"
                    height="229"
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="responsive-img"
                  />
                </Link>
              </div>
              <div className="card-content" style={{ padding: "0px" }}>
                <span
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginBottom: "0"
                  }}
                  className="truncate card-title activator"
                >
                  {recipe.name}
                </span>
              </div>
              <div className="card-reveal" style={{ padding: "10px" }}>
                <span className="card-title grey-text text-darken-4 left-align">
                  <i className="material-icons right">close</i>
                  {recipe.name}
                </span>

                <Ratings ratings={recipe.ratings} />
                <ul>
                  <li>
                    <h6>{recipe.category}</h6>
                  </li>
                  <li>Serves: {recipe.serves}</li>
                  <li>Preparation Time: {recipe.prepTimeinMins} Mins</li>
                  <li>Cooking Time: {recipe.cookTimeinMins} Mins</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Recipes;
