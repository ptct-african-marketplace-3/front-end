/* This reducer is for the getting, creation, editting, and deletion of owner items */
import {
    CREATE_ITEM_FAILURE, 
    CREATE_ITEM_SUCCESS, 
    CREATE_ITEM_START, 
    EDIT_ITEM_START, 
    EDIT_ITEM_SUCCESS, 
    EDIT_ITEM_FAILURE, 
    DELETE_ITEM_START, 
    DELETE_ITEM_SUCCESS, 
    DELETE_ITEM_FAILURE, 
    GET_ITEMS_START, 
    GET_ITEMS_SUCCESS, 
    GET_ITEMS_FAILURE } 
from "../actions/ownerActions"


const initialState = {
    items : [],
    loading: false,
    error: ''
};


// This reducer could be condensed, and will likely be refactored to be more condensed
// i.e instead of a start, and failure for each action,
// we have case for each SUCCESS, and have a single start, and failure case
export default function ownerReducer(state = initialState, action) {
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
                items: [...action.payload]
            };
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case CREATE_ITEM_START:
            return {
                ...state,
                loading: true
            };
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            };
        
        case CREATE_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case EDIT_ITEM_START:
            return {
                ...state,
                loading: true
            };
        
        case EDIT_ITEM_SUCCESS:
            const index     = state.items.findIndex(item => item.id !== action.payload.id);
            const newItems  = [...state.items];
            newItems[index] = action.payload; 

            return {
                ...state,
                loading: false,
                items: newItems
            };

        case EDIT_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case DELETE_ITEM_START:
            return {
                ...state,
                loading: true
            };
        
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [state.items.filter(item => item.id !== action.payload.id)]
            };

        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
