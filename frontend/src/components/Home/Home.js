import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isLoading, isAuthenticated }) => {
  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex justify-center items-center flex-col"
    >
      {!isLoading && isAuthenticated ? (
        <h1>Welcome to Imaraat</h1>
      ) : (
        <Fragment>
          <h1 className="text-2xl mb-5">Home</h1>
          <Link className="p-3 border mb-3" to="/register">
            Register
          </Link>
          <Link className="p-3 border mb-3" to="/login">
            Login
          </Link>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, null)(Home);
