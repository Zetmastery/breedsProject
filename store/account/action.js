import {actionObject} from '../../components/actionObject';
import {LOGIN} from './action-types';

export const setLogin = payload => actionObject(LOGIN, payload);
