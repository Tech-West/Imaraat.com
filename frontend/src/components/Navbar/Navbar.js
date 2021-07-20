import { Fragment, useState } from "react";
import { connect } from "react-redux";
import Logo from "../../images/logo-transparent.png";
import LogoDarkBg from "../../images/logo-transparent-dark.png";
import { Link } from "react-router-dom";
import { Avatar, FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: "white",
    backgroundImage: "linear-gradient(45deg, #FF5F1F, #FF4433)",
  },
  switchBase: {
    color: "#FF5F1F",
    "&$checked": {
      color: "#FF4433",
    },
    "&$checked + $track": {
      backgroundColor: "#FF4433",
    },
  },
  checked: {},
  track: {},
}));

const Navbar = ({ isAuthenticated, isLoading, user }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    if (checked) {
      window.document.documentElement.classList.remove("dark");
    } else {
      window.document.documentElement.classList.add("dark");
    }
    setChecked((prev) => !prev);
  };

  return (
    <div
      style={{ height: "14vh" }}
      className="border-b-4 border-grey flex items-center bg-white dark:bg-dark-primary dark:border-dark-secondary"
    >
      <nav className="py-5 w-4/5 mx-auto flex items-center justify-between">
        <a style={{ width: "180px" }} href="/">
          {checked ? (
            <img style={{ width: "180px" }} alt="sitelogo" src={LogoDarkBg} />
          ) : (
            <img style={{ width: "180px" }} alt="sitelogo" src={Logo} />
          )}
        </a>

        <ul className="flex items-center">
          <li className="text-black dark:text-white">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={checked}
                    onChange={toggleChecked}
                    classes={{
                      root: classes.root,
                      switchBase: classes.switchBase,
                      thumb: classes.thumb,
                      track: classes.track,
                      checked: classes.checked,
                    }}
                  />
                }
                label="Darkmode"
              />
            </FormGroup>
          </li>
          {!isLoading && isAuthenticated ? (
            <Fragment>
              <li className="ml-6">
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-orange-primary transition-colors font-medium dark:text-white"
                >
                  Add Project
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  to="/login"
                  className="text-gray-500 hover:text-orange-primary transition-colors font-medium dark:text-white"
                >
                  All Projects
                </Link>
              </li>
              <li className="cursor-pointer ml-6">
                <Avatar className={classes.orange}>
                  {user.username[0].toUpperCase()}
                </Avatar>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link
                  to="/login"
                  className="py-2 px-5 rounded-md border border-orange-primary text-orange-primary hover:text-orange-primary transition-colors text-base"
                >
                  Login
                </Link>
              </li>
              <li className="ml-3">
                <Link
                  to="/register"
                  className="py-2 px-5 rounded-md  border border-orange-primary  text-grey-900 transition-colors text-base bg-primary-gradient text-white"
                >
                  Register
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  user: state.auth.userInfo,
});

export default connect(mapStateToProps, null)(Navbar);
