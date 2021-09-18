import { combineReducers } from 'redux';
import ownerReducer    from './ownerReducer';
import loginReducer    from './loginReducer';
import registerReducer from './registerReducer';
import itemReducer     from './itemReducer';

const rootReducer = combineReducers({
    ownerReducer,
    loginReducer,
    registerReducer,
    itemReducer
});

export default rootReducer;