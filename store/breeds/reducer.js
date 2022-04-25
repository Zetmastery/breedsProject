import {
  GET_BREEDS_ASYNC,
  GET_DETAILS_ASYNC,
  SET_STARRED_ASYNC,
} from './action-types';

const initialState = {
  allBreeds: undefined,
  starred: [],
  detailed: {},
};
const breeds = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_BREEDS_ASYNC:
      return {...state, allBreeds: payload};
    case SET_STARRED_ASYNC:
      return {...state, starred: payload};
    case GET_DETAILS_ASYNC:
      return {...state, detailed: payload};
    default:
      return state;
  }
};
export default breeds;
