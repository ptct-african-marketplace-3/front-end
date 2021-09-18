import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS } 
from '../actions/loginActions';

const initialState = {
    login  : {},
    error  : '',
    loading: false
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return { 
                ...state, 
                loading: true 
            };

        case LOGIN_SUCCESS:
            return { 
                ...state,
                loading: false, 
                login  : action.payload
            };
        
        case LOGIN_FAILURE:
            return {
                ...state, 
                loading: false, 
                error  : action.payload
            };

        default:
            return state;
    }
}