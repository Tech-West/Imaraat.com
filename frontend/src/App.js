import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import store from "./store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home/Home";
import CreateProfile from "./components/Profile/CreateProfile";
import UploadAvatar from "./components/Profile/UploadAvatar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CompanyProfile from "./components/CompanyPages/CompanyProfile";
import InvalidLink from "./components/Errors/InvalidLink";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Project from "./components/Projects/Project";
import { loadUser } from "./actions/auth";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="transition duration-500">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={CreateProfile} />
            <Route path="/avatar/upload" component={UploadAvatar} />
            <Route path="/project" component={Project} />
            <Route path="/company-profile" component={CompanyProfile} />
            <Route path="/" exact component={Home} />
            <Route path="/404" component={InvalidLink} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
