import { useState } from "react";
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

  const { email, password } = credentials;
  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    removeAlerts();
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
    <div className="flex items-center justify-center min-w-full min-h-screen bg-login-bg bg-cover py-24">
      <div className="w-96 rounded-lg border py-8 px-6 md:py-8 md:px-8 bg-light-op-09">
        <h2 className="text-center text-2xl mb-5">Login to continue!</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="w-full rounded-md border mb-3 bg-white flex items-center overflow-hidden">
            <div className="p-3">
              <MailOutlineIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-3"
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Email Address"
            />
          </div>
          <div className="w-full rounded-md border mb-3 bg-white flex items-center overflow-hidden">
            <div className="p-3">
              <LockOutlinedIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-3"
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
            className="w-full p-3 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient"
            type="submit"
            value="Login"
          />
        </form>
        <div className="">
          <p className="text-center">
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
