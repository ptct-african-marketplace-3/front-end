import { 
    GET_ITEMS_START, 
    GET_ITEMS_SUCCESS, 
    GET_ITEMS_FAILURE } 
from "../actions/itemActions";

const initialState = {
    items  : [],
    loading: false,
    error  : ''
};

export default function itemReducer(state = initialState, action) {
    switch(action.type) {        
        case GET_ITEMS_START:
            return {
                ...state,
                loading: true
            };
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items  : [...action.payload]
            };
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error  : action.payload
            }

        default: 
            return state;
    }
}
