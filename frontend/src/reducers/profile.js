import {
  PROFILE_CREATION_SUCCESS,
  PROFILE_LOAD_SUCCESS,
  PROFILE_CREATION_FAILED,
  PROFILE_LOAD_FAILED,
  PROFILE_AVATAR_UPLOADED,
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
  } else if (type === PROFILE_AVATAR_UPLOADED) {
    return {
      ...profile,
      data: {
        ...profile.data,
        logoImageURL: payload,
      },
    };
  }

  return profile;
};

export default profile;
