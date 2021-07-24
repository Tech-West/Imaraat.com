import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home/Home";
import CreateProfile from "./components/Profile/CreateProfile";
import UploadAvatar from "./components/Profile/UploadAvatar";

function App() {
  return (
    <div className="transition duration-500">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={CreateProfile} />
            <Route path="/avatar/upload" component={UploadAvatar} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
