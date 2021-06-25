import { SET_ALERTS, REMOVE_ALERTS } from "../actions/actionTypes";

const alerts = (alerts = [], action) => {
  const { type, payload } = action;

  if (type === SET_ALERTS) {
    return [...alerts, ...payload];
  } else if (type === REMOVE_ALERTS) {
    return [];
  }
  return alerts;
};

export default alerts;
