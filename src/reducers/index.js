import { combineReducers } from 'redux';
import  ownerReducer  from './ownerReducer';
import  loginReducer  from './loginReducer';

const rootReducer = combineReducers({
    ownerReducer,
    loginReducer
});

export default rootReducer;