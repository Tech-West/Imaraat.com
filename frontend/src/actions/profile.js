import axios from "axios";
import {
  PROFILE_CREATION_SUCCESS,
  PROFILE_CREATION_FAILED,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILED,
} from "./actionTypes";

export const createProfile = (profile) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    ...profile,
  };

  try {
    const res = await axios.post("/api/profile", body, config);
    console.log(res);
    dispatch({
      type: PROFILE_CREATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_CREATION_FAILED,
    });
  }
};

export const loadProfile = () => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get("/api/profile", config);
    dispatch({
      type: PROFILE_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_LOAD_FAILED,
    });
  }
};
