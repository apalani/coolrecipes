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
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
}
