import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSucess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
})

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/cheeses`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject('Something went wrong')
    }
    return res.json();
  })
  .then(cheeses => dispatch(fetchCheesesSucess(cheeses)))
  .catch(error => dispatch(fetchCheeses(error)));
};

export const ADD_CHEESE_REQUEST = 'ADD_CHEESE_REQUEST';
export const addCheeseRequest = () => ({
  type: ADD_CHEESE_REQUEST
})

export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE_SUCCESS';
export const addCheeseSuccess = () => ({
  type: ADD_CHEESE_SUCCESS,
  cheese
})

export const ADD_CHEESE_ERROR = 'ADD_CHEESE_ERROR';
export const addCheeseError = () => ({
  type: ADD_CHEESE_ERROR,
  error
})

export const addCheese = cheese => dispatch => {
  dispatch(addCheeseRequest());
  fetch(`${API_BASE_URL}/cheeses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cheese)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject('Something went wrong')
    }
    return res.json()
  })
  .then(cheese => dispatch(addCheeseSuccess(cheese)))
  .catch(error => dispatch(addCheeseError(error)))
}