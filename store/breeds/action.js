import {actionObject} from '../../components/actionObject';
import {GET_BREEDS, GET_DETAILS, SET_STARRED} from './action-types';

export const getBreeds = payload => actionObject(GET_BREEDS, payload);
export const setStarred = payload => actionObject(SET_STARRED, payload);
export const getDetails = payload => actionObject(GET_DETAILS, payload);
