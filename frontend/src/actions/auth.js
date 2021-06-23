import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionTypes";
import axios from "axios";
import setGlobalAuthToken from "../utils/setToken";

export const register = (username, email, password) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    username,
    email,
    password,
  };

  try {
    const res = await axios.post("/api/register", body, config);
    setGlobalAuthToken(res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    email,
    password,
  };

  try {
    const res = await axios.post("/api/login", body, config);
    setGlobalAuthToken(res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
