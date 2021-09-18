import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const CREATE_ITEM_START   = 'CREATE_ITEM_START';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILURE = 'CREATE_ITEM_FAILURE';

export const EDIT_ITEM_START    = 'EDIT_ITEM_START';
export const EDIT_ITEM_SUCCESS  = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_FAILURE  = 'EDIT_ITEM_FAILURE';

export const DELETE_ITEM_START   = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const GET_ITEMS_START   = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

// Get the owner's items
export const getItems = (ownerID) => dispatch => {
    dispatch({type: GET_ITEMS_START});

    axiosWithAuth().get('/')
        .then(success => {
            dispatch({
                type   : GET_ITEMS_SUCCESS,
                payload: success.data
            });
        })
        .catch(err => {
            dispatch({
                type   : GET_ITEMS_FAILURE,
                payload: err
            });
        })
}


export const createItem = (itemData, push) => dispatch => {
    dispatch({type: CREATE_ITEM_START});

    // Add endpoint
    axiosWithAuth().post('/', itemData)
        .then(success => {
            dispatch({
                type   : CREATE_ITEM_SUCCESS,
                payload: success.data
            });

            // Uncomment once Routes are setup
            //push('/items');
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type   : CREATE_ITEM_FAILURE,
                payload: err
            });

            // Uncomment once Routes are setup
            //push('/items');
        })
}

export const editItem = (itemID, push) => dispatch => {
    dispatch({type: EDIT_ITEM_START});

    axiosWithAuth().put('/', itemID)
        .then(success => {
            dispatch({
                type   : EDIT_ITEM_SUCCESS,
                payload: success.data
            });

            //push('/items');
        })
        .catch(err => {
            console.log(err);

            dispatch({
                type: EDIT_ITEM_FAILURE,
                payload: err
            })

            //push('/items')
        });
}


export const deleteItem = (itemID, push) => dispatch => {
    dispatch({type: DELETE_ITEM_START});

    axiosWithAuth().put('/', itemID)
        .then(success => {
            dispatch({
                type   : DELETE_ITEM_SUCCESS,
                payload: success.data
            });

            //push('/items');
        })
        .catch(err => {
            console.log(err);

            dispatch({
                type: DELETE_ITEM_FAILURE,
                payload: err
            })

            //push('/items')
        });
}