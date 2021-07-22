import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CreateProfile from "./components/Profile/CreateProfile";

function App() {
  return (
    <div className="transition duration-500">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={CreateProfile} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
