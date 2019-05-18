import React, { Component } from "react";

class RecipeDetails extends Component {
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
              <div className="col s9">
                <h4>{recipe.name}</h4>
              </div>
              <div className="col s3">
                {isLoggedIn ? (
                  <h4 className="right">
                    <i
                      style={{ verticalAlign: "text-bottom" }}
                      className="material-icons"
                    >
                      edit
                    </i>
                    {"    "}
                    <i
                      style={{ verticalAlign: "text-bottom" }}
                      className="material-icons"
                    >
                      delete
                    </i>
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
              <div className="col s12">
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
            </div>
            <div className="row">
              <div className="col s12">
                <h5>
                  <i
                    style={{ verticalAlign: "text-bottom" }}
                    className="material-icons"
                  >
                    add_circle_outline
                  </i>{" "}
                  Ingredients
                </h5>
                <ul className="collection">
                  {recipe.ingredients.map(ingredient => (
                    <li className="collection-item" key={ingredient._id}>
                      {ingredient.name} <i>({ingredient.quantity})</i>
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
          <div>Loading...</div>
        )}
        <div />
      </div>
    );
  }
}

export default RecipeDetails;
