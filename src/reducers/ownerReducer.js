import {CREATE_ITEM_FAILURE, CREATE_ITEM_SUCCESS, CREATE_ITEM_START, EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE, DELETE_ITEM_START, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE} from "../actions/ownerActions"
import axiosWithAuth from '../helpers/axiosWithAuth';

const initialState = {
    items : [],
    loading: false,
    error: ''
}

export default function ownerReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_ITEM_START:
            return {
                ...state,
                loading: true
            }
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            }
        
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
