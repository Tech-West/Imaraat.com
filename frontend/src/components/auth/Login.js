import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import { setAlerts, removeAlerts } from "../../actions/alerts";
import Alerts from "../Alerts/Alerts";

const Login = ({
  login,
  removeAlerts,
  setAlerts,
  isAuthenticated,
  isLoading,
}) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    removeAlerts();
  }, [removeAlerts]);

  const { email, password } = credentials;
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    } else {
      setAlerts([{ msg: "Fields cannot be empty", type: "DANGER" }]);
    }
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex items-center justify-center min-w-full bg-login-bg bg-cover py-12"
    >
      <div className="w-96 rounded-lg border py-8 px-6 md:py-8 md:px-8 bg-light-op-09 dark:bg-dark-op-09 dark:border-dark-primary">
        <h2 className="text-center text-2xl mb-5 dark:text-gray-200">
          Login to continue!
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="w-full rounded-md border dark:border-dark-secondary mb-2.5 bg-white dark:bg-dark-primary flex items-center overflow-hidden  dark:text-white">
            <div className="p-2.5">
              <MailOutlineIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary"
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Email Address"
            />
          </div>
          <div className="w-full rounded-md border  dark:border-dark-secondary mb-2.5 bg-white dark:bg-dark-primary flex items-center overflow-hidden  dark:text-white">
            <div className="p-2.5">
              <LockOutlinedIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-2.5 dark:bg-dark-primary"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Password"
            />
          </div>
          <Alerts />
          <input
            className="w-full p-2.5 rounded-md border dark:border-dark-secondary mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient"
            type="submit"
            value="Login"
          />
        </form>
        <div className="">
          <p className="text-center dark:text-white">
            Don't have an account?{" "}
            <Link
              className="cursor-pointer text-orange-primary font-semibold"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login, removeAlerts, setAlerts })(
  Login
);
