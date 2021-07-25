import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
} from "../actions/actionTypes";

const initialState = {
  token: null,
  isAuthenticated: null,
  isLoading: true,
  userInfo: null,
};

const authReducer = (auth = initialState, action) => {
  const { type, payload } = action;
  if (type === REGISTER_SUCCESS) {
    localStorage.setItem("token", payload.token);
    return {
      ...auth,
      token: payload.token,
      isAuthenticated: true,
      isLoading: false,
      userInfo: payload.user,
    };
  } else if (type === LOGIN_SUCCESS) {
    localStorage.setItem("token", payload.token);
    return {
      ...auth,
      token: payload.token,
      userInfo: payload.user,
      isAuthenticated: true,
      isLoading: false,
    };
  } else if (type === USER_LOAD_SUCCESS) {
    return {
      ...auth,
      token: payload.token,
      isAuthenticated: true,
      userInfo: payload.user,
      isLoading: false,
    };
  } else if (type === REGISTER_FAIL || LOGIN_FAIL || USER_LOAD_FAIL) {
    return {
      ...auth,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      userInfo: null,
    };
  }
  return auth;
};

export default authReducer;
