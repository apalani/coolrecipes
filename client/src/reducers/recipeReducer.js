import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_BY_USER,
  GET_RECIPE_BY_ID
} from "../actions/types";

const initialState = {
  recipes: [],
  recipe: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload
      };

    case GET_ALL_RECIPES_BY_USER:
      return {
        ...state,
        recipes: payload
      };

    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipe: payload
      };

    default:
      return state;
  }
}
