import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  recipe: recipeReducer
});
