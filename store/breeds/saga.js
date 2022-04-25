import {put, select, takeLatest, call, all} from 'redux-saga/effects';
import {actionObject} from '../../components/actionObject';
import FetchService from '../../components/fetchService';
import {getBreeds} from '../selectors';
import {
  GET_BREEDS_ASYNC,
  GET_BREEDS,
  SET_STARRED,
  SET_STARRED_ASYNC,
  GET_DETAILS,
  GET_DETAILS_ASYNC,
} from './action-types';

function* getBreedsAsync() {
  try {
    const response = yield call(
      FetchService,
      'https://dog.ceo/api/breeds/list/all',
      'GET',
      undefined,
    );
    yield put(actionObject(GET_BREEDS_ASYNC, response.message));
  } catch (error) {
    console.log(error, 'wat');
  }
}

function* setStarredAsync({payload}) {
  try {
    const {starred} = yield select(getBreeds);
    const subject = payload;

    if (starred.includes(subject)) {
      const filtered = starred.filter(element => element !== subject);
      yield put(actionObject(SET_STARRED_ASYNC, filtered));
    } else if (starred.length > 0) {
      const add = [...starred, subject];
      yield put(actionObject(SET_STARRED_ASYNC, add));
    } else {
      yield put(actionObject(SET_STARRED_ASYNC, [subject]));
    }
  } catch (error) {
    console.log(error, 'wwwwww');
  }
}

function* getDetailsAsync({payload}) {
  try {
    console.log(payload);
    const main = [];
    const sub = [];
    const data = yield call(
      FetchService,
      `https://dog.ceo/api/breed/${payload}/images/random`,
      'GET',
      undefined,
    );

    main.push([payload, data.message]);

    const data2 = yield call(
      FetchService,
      `https://dog.ceo/api/breed/${payload}/list`,
      'GET',
      undefined,
    );

    const data3 = yield all(
      data2.message.map(element => {
        const x = call(
          FetchService,
          `https://dog.ceo/api/breed/${payload}/${element}/images/random`,
          'GET',
          undefined,
        );
        return x;
      }),
    );
    data2.message.map((element, index) => {
      sub.push([element, data3[index].message]);
    });

    yield put(actionObject(GET_DETAILS_ASYNC, {title: main, subBreeds: sub}));
  } catch (error) {
    console.log(error, 'hello');
  }
}

export function* watchGetBreeds() {
  yield takeLatest(GET_BREEDS, getBreedsAsync);
}

export function* watchSetStarred() {
  yield takeLatest(SET_STARRED, setStarredAsync);
}
export function* watchGetDetails() {
  yield takeLatest(GET_DETAILS, getDetailsAsync);
}
