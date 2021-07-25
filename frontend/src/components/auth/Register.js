import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alerts from "../Alerts/Alerts";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { removeAlerts } from "../../actions/alerts";

const Register = ({ register, removeAlerts, isAuthenticated, isLoading }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = credentials;
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    removeAlerts();
    if (password === password2) {
      register(username, email, password);
    }
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to="/profile" />;
  }

  return (
    <div
      style={{ minHeight: "86vh" }}
      className="flex items-center justify-center min-w-full bg-register-bg bg-cover py-12"
    >
      <div className="w-96 rounded-lg border py-8 px-6 md:py-8 md:px-8 bg-light-op-09 dark:bg-dark-op-09 dark:border-dark-secondary">
        <h2 className="text-center text-2xl mb-5 dark:text-white">
          Register to continue!
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="w-full rounded-md border mb-2.5 bg-white flex items-center overflow-hidden dark:bg-dark-primary dark:border-dark-secondary">
            <div className="p-2.5">
              <MailOutlineIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 py-2.5 dark:bg-dark-primary dark:text-white"
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Email Address"
            />
          </div>

          <div className="w-full rounded-md border mb-2.5 bg-white flex items-center overflow-hidden dark:bg-dark-primary dark:border-dark-secondary">
            <div className="p-2.5">
              <PersonOutlineIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 py-2.5 dark:bg-dark-primary dark:text-white"
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Username"
            />
          </div>

          <div className="w-full rounded-md border mb-2.5 bg-white flex items-center overflow-hidden dark:bg-dark-primary dark:border-dark-secondary">
            <div className="p-2.5">
              <LockOutlinedIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 py-2.5 dark:bg-dark-primary dark:text-white"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Password"
            />
          </div>

          <div className="w-full rounded-md border mb-2.5 bg-white flex items-center overflow-hidden dark:bg-dark-primary dark:border-dark-secondary">
            <div className="p-2.5">
              <LockOutlinedIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 py-2.5 dark:bg-dark-primary dark:text-white"
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Confirm Password"
            />
          </div>
          <Alerts />
          <input
            className="w-full p-2.5 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient dark:border-dark-secondary"
            type="submit"
            value="Register"
          />
        </form>
        <div className="">
          <p className="text-center dark:text-white">
            Already have an account?{" "}
            <Link
              className="cursor-pointer text-orange-primary font-semibold"
              to="/login"
            >
              Login
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

export default connect(mapStateToProps, { register, removeAlerts })(Register);
