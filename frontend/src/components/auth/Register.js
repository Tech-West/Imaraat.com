import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

const Register = ({ register, isAuthenticated, isLoading }) => {
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
    if (password === password2) {
      register(username, email, password);
    }
  };

  if (isAuthenticated && !isLoading) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen bg-register-bg bg-cover py-24">
      <div className="w-96 rounded-lg border py-8 px-6 md:py-8 md:px-8 bg-light-op-09">
        <h2 className="text-center text-2xl mb-5">Register to continue!</h2>
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
              <PersonOutlineIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-3"
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Username"
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

          <div className="w-full rounded-md border mb-3 bg-white flex items-center overflow-hidden">
            <div className="p-3">
              <LockOutlinedIcon style={{ color: "#FF5F1F" }} />
            </div>
            <input
              className="outline-none focus:border-orange-primary flex-1 p-3"
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Confirm Password"
            />
          </div>
          <input
            className="w-full p-3 rounded-md border mb-5 outline-none text-white cursor-pointer transition bg-primary-gradient"
            type="submit"
            value="Register"
          />
        </form>
        <div className="">
          <p className="text-center">
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

export default connect(mapStateToProps, { register })(Register);
