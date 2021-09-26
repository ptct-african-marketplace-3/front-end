import { 
    GET_ITEMS_START, 
    GET_ITEMS_SUCCESS, 
    GET_ITEMS_FAILURE,
    CLEAR_ITEMS } 
from "../actions/itemActions";

const dummyData = [
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100}, 
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100}, 
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100},
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100}, 
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100}, 
    {itemName: 'Very Cool Item', itemDescription: 'A very cool item', itemLocation: 'South Africa', itemPrice: 100}
]

const initialState = {
    items  : [],
    loading: true,
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
            console.log('Success');
            console.log(state);
            console.log(action);
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
        case CLEAR_ITEMS: 
            return {
                ...state,
                items: []
            }

        default: 
            return state;
    }
}
