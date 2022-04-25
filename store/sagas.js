import {all, fork} from 'redux-saga/effects';
import {watchLogin} from './account/saga';
import {watchGetBreeds, watchGetDetails, watchSetStarred} from './breeds/saga';

export default function* rootSaga() {
  yield all([
    fork(watchGetBreeds),
    fork(watchSetStarred),
    fork(watchLogin),
    fork(watchGetDetails),
  ]);
}
