import axios from "axios";
import {
  PROFILE_CREATION_SUCCESS,
  PROFILE_CREATION_FAILED,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILED,
  PROFILE_AVATAR_UPLOADED,
} from "./actionTypes";

export const createProfile = (profile, history) => async (dispatch) => {
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
    dispatch({
      type: PROFILE_CREATION_SUCCESS,
      payload: res.data,
    });
    history.push("/avatar/upload");
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_CREATION_FAILED,
    });
  }
};

export const uploadAvatar = (file) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  try {
    const uploadConfig = await axios.get("/api/upload", config);
    await fetch(uploadConfig.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const avatarUrl = uploadConfig.data.url.split("?")[0];
    console.log(avatarUrl);
  } catch (err) {
    console.log(err);
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
    dispatch({
      type: PROFILE_LOAD_FAILED,
    });
  }
};
