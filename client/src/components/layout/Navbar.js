import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    let isLoggedIn = false;
    if (this.props.auth.isAuthenticated) isLoggedIn = true;

    return (
      <nav className="z-depth-0">
        <div
          className="nav-wrapper white"
          style={{ borderBottom: "1px solid #666" }}
        >
          {isLoggedIn ? (
            <React.Fragment>
              <Link
                to="/"
                style={{
                  fontSize: "15px",
                  padding: "0px 10px"
                }}
                onClick={this.onLogoutClick}
                className="col s5 black-text right waves-effect"
              >
                LOGOUT
              </Link>
              <Link
                to="/dashboard"
                style={{
                  fontSize: "15px",
                  padding: "0px 10px",
                  textTransform: "uppercase"
                }}
                className="col s5 brand-logo black-text left waves-effect"
              >
                <i className="material-icons">person_pin</i>
                {user.name.split(" ")[0]}
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link
                to="/login"
                style={{
                  fontSize: "15px",
                  padding: "0px 10px"
                }}
                className="col s5 black-text right waves-effect"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                style={{
                  fontSize: "15px",
                  padding: "0px 10px"
                }}
                className="col s5 black-text left waves-effect"
              >
                REGISTER
              </Link>
            </React.Fragment>
          )}
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
              padding: "0px 10px"
            }}
            className="col s5 brand-logo center black-text waves-effect"
          >
            <i className="material-icons">fastfood</i>
            COOLRECIPES
          </Link>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
