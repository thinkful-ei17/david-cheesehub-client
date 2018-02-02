import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR } from '../actions/cheese';

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
        cheeses: action.cheeses
      }
    case FETCH_CHEESES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}