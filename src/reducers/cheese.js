import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR, ADD_CHEESE_REQUEST, ADD_CHEESE_SUCCESS, ADD_CHEESE_ERROR } from '../actions/cheese';

const initialState = {
  loading: false,
  cheeses: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CHEESES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CHEESES_SUCCESS:
      return {
        ...state,
        loading: false,
        cheeses: action.cheeses,
        error: null
      }
    case FETCH_CHEESES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADD_CHEESE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_CHEESE_SUCCESS:
      return {
        ...state,
        loading: false,
        cheeses: [...state.cheeses, action.cheese],
        error: null
      }
    case ADD_CHEESE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}