import { React, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
  component: Component,
  auth: { isAuthenticated, isLoading },
  ...rest
}) => {
  if (isLoading) {
    return <Fragment></Fragment>;
  } else {
    return (
      <Route
        {...rest}
        render={(props) =>
          !isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
