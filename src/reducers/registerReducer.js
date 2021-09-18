import { 
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE } 
from "../actions/registerActions";

const initialState = {
    login: {},
    error: '',
}

export default function registerReducer(state = initialState, action) {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
