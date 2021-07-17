import { SET_ALERTS, REMOVE_ALERTS } from "./actionTypes";

export const setAlerts = (alerts) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERTS,
  });
  dispatch({
    type: SET_ALERTS,
    payload: alerts,
  });
};

export const removeAlerts = () => (dispatch) => {
  dispatch({
    type: REMOVE_ALERTS,
  });
};
