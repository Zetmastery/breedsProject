import {LOGIN_ASYNC} from './action-types';

const initialState = {
  user: undefined,
};
const account = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_ASYNC:
      return {...state, user: payload};
    default:
      return state;
  }
};
export default account;
