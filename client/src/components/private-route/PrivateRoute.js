import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showMatches } from "../../actions/showActions";
const PrivateRoute = ({ component: Component, auth,matches, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
  showMatches:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  matches:state.matches
});

export default connect(mapStateToProps,{showMatches})(PrivateRoute);
