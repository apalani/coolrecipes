import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_BY_USER,
  GET_RECIPE_BY_ID,
  DELETE_RECIPE_BY_ID,
  CREATE_RECIPE
} from "../actions/types";

const initialState = {
  recipes: [],
  recipe: null,
  userName: ""
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

    case CREATE_RECIPE:
      return {
        ...state,
        recipe: payload
      };

    case DELETE_RECIPE_BY_ID:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe._id !== payload)
      };

    default:
      return state;
  }
}
