import axios from "axios";
import {
  GET_ALL_RECIPES,
  GET_ALL_RECIPES_BY_USER,
  GET_RECIPE_BY_ID,
  GET_ERRORS,
  DELETE_RECIPE_BY_ID,
  ADD_RECIPE
} from "./types";
import { notify } from "react-notify-toast";

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

export const getAllRecipesByUser = id => dispatch => {
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

export const getRecipeById = id => dispatch => {
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

export const deleteRecipeById = id => dispatch => {
  axios
    .delete(`/api/recipe/delete/${id}`)
    .then(response => {
      notify.show("Recipe deleted successfully!", "error");
      dispatch({
        type: DELETE_RECIPE_BY_ID,
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

export const addRecipe = (recipeData, history) => dispatch => {
  axios
    .post(`/api/recipe/create`, recipeData)
    .then(response => {
      notify.show("Recipe added successfully!", "success");
      dispatch({
        type: ADD_RECIPE,
        payload: response.data
      });
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
