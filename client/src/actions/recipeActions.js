import axios from "axios";
import { FETCH_ALL_RECIPES, GET_RECIPE_BY_ID, GET_ERRORS } from "./types";

export const fetchAllRecipes = () => dispatch => {
  axios
    .get("/api/recipe/all")
    .then(response => {
      dispatch({
        type: FETCH_ALL_RECIPES,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getRecipeById = id => async dispatch => {
  console.log(id);
  axios
    .get(`/api/recipe/detail/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_RECIPE_BY_ID,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
