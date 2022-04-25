import {combineReducers} from 'redux';
import breeds from './breeds/reducer';
import account from './account/reducer';

const reducers = combineReducers({breeds, account});

export default reducers;
