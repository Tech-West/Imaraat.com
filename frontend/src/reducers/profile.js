import {
  PROFILE_CREATION_SUCCESS,
  PROFILE_LOAD_SUCCESS,
  PROFILE_CREATION_FAILED,
  PROFILE_LOAD_FAILED,
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  data: null,
};

const profile = (profile = initialState, action) => {
  const { type, payload } = action;

  if (type === PROFILE_CREATION_SUCCESS || type === PROFILE_LOAD_SUCCESS) {
    return {
      ...profile,
      data: payload,
      isLoading: false,
    };
  } else if (type === PROFILE_CREATION_FAILED || type === PROFILE_LOAD_FAILED) {
    return {
      ...profile,
      data: null,
      isLoading: false,
    };
  }

  return profile;
};

export default profile;
