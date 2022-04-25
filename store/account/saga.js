import {put, select, takeLatest, call} from 'redux-saga/effects';
import {actionObject} from '../../components/actionObject';
import FetchService from '../../components/fetchService';

import {LOGIN, LOGIN_ASYNC} from './action-types';

function* setLoginAsync({payload}) {
  try {
    const data = payload;
    yield put(actionObject(LOGIN_ASYNC, data));
  } catch (error) {
    console.log(error, 'wat');
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, setLoginAsync);
}
