import axios from "axios";
import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_BY_USER,
  GET_RECIPE_BY_ID,
  GET_ERRORS
} from "./types";

export const getAllRecipes = () => dispatch => {
  axios
    .get("/api/recipe/all")
    .then(response => {
      dispatch({
        type: GET_ALL_RECIPES,
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

export const getAllRecipesByUser = id => async dispatch => {
  axios
    .get(`/api/recipe/all/${id}`)
    .then(response => {
      dispatch({
        type: GET_ALL_RECIPES_BY_USER,
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
  axios
    .get(`/api/recipe/detail/${id}`)
    .then(response => {
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
