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
export const GET_OWNER_ITEMS_SUCCESS = 'GET_OWNER_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

// Get the owner's items
export const getOwnerItems = (ownerID) => dispatch => {
    dispatch({type: GET_ITEMS_START});
    console.log('Getting owner items...');

    axiosWithAuth()
        .get(`https://ptct-african-marketplace-3.herokuapp.com/api/items/owner/${ownerID}`)
        .then(success => {
            console.log('-=-=-=-=-=-')
            console.log(success);
            dispatch({
                type   : GET_OWNER_ITEMS_SUCCESS,
                payload: success.data.items
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type   : GET_ITEMS_FAILURE,
                payload: err
            });
        })
}


export const createItem = (itemData) => dispatch => {
    dispatch({type: CREATE_ITEM_START});
    console.log('Creating item');

    // Add endpoint
    axiosWithAuth().post(`https://ptct-african-marketplace-3.herokuapp.com/api/items`, itemData)
        .then(success => {
            console.log('Successfull item creation');
            dispatch({
                type   : CREATE_ITEM_SUCCESS,
                payload: success.data.item
            });

            // Uncomment once Routes are setup
            // push(`/user/${ownerID}`);
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type   : CREATE_ITEM_FAILURE,
                payload: err
            });

            // Uncomment once Routes are setup
            // push(`/user/${ownerID}`);
        })
}

export const editItem = (itemID) => dispatch => {
    dispatch({type: EDIT_ITEM_START});

    axiosWithAuth().put(`https://ptct-african-marketplace-3.herokuapp.com/api/items/owner/${itemID}`, itemID)
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


export const deleteItem = (itemID) => dispatch => {
    dispatch({type: DELETE_ITEM_START});

    axiosWithAuth().put(`https://ptct-african-marketplace-3.herokuapp.com/api/owner/${itemID}`, itemID)
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