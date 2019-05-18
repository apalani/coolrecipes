import React, { Component, Fragment } from "react";
import "./Ratings.css";

class Ratings extends Component {
  render() {
    const { ratings } = this.props;
    const rating = (ratings.value / ratings.count) * 20;

    return (
      <Fragment>
        <div className="starRating">
          <div className="starRatingBottom">
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
            <div className="starRatingTop" style={{ width: `${rating}%` }}>
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="starRatingCount">({ratings.count})</div>
      </Fragment>
    );
  }
}

export default Ratings;
