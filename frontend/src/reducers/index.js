import { combineReducers } from "redux";
import auth from "./auth";
import alerts from "./alerts";
import profile from "./profile";

const rootReducer = combineReducers({
  alerts,
  profile,
  auth,
});

export default rootReducer;
