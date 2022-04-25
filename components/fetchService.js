import {call} from 'redux-saga/effects';
import axios from 'axios';

const TIMEOUT = 30000;

function* FetchService(
  url,
  method = 'GET',
  params = undefined,
  auth = null,
  consoleLog = false,
) {
  const objectRequest = {
    method,
    url: `${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: TIMEOUT,
  };

  if (consoleLog) console.log('object Request', objectRequest);
  if (auth) objectRequest.headers.Authorization = `Bearer ${auth}`;
  if (consoleLog) console.log('auth', auth);

  const response = yield call(axios, objectRequest);
  if (consoleLog) console.log('response', response);
  const responseBody = response.data;
  if (consoleLog) console.log('responseBody', responseBody);
  return responseBody;
}

export default FetchService;
