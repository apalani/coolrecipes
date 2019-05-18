import {
  SET_CURRENT_USER,
  USER_LOADING,
  GET_USER_NAME
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  userName: ""
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_NAME:
      return {
        ...state,
        userName: payload
      };
    default:
      return state;
  }
}
