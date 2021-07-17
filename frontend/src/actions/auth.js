import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./actionTypes";
import axios from "axios";
import setGlobalAuthToken from "../utils/setToken";
import { setAlerts } from "./alerts";

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
    const errors = err.response.data.errors;
    if (errors) {
      const errorsArray = Object.values(errors);
      const errorsRefinedArray = errorsArray.map((error) => {
        return {
          msg: error.message,
          type: "DANGER",
        };
      });
      dispatch(setAlerts(errorsRefinedArray));
    }
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
    const error = err.response.data.err.message;
    if (error) {
      dispatch(setAlerts([{ msg: error, type: "DANGER" }]));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
