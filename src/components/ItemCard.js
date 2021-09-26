import { Button, Card, makeStyles, Chip } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteItem, editItem } from '../actions/ownerActions';

const useStyles = makeStyles({
    itemCard: {
        margin: '0px auto',
        marginTop: '10px',
        marginBottom: '10px',
        padding: '20px',
        width: '350px',
        height: '350px',
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        backgroundColor: 'black',
        color: 'white'
    },
    itemTitle: {
        margin: '2px auto',
        fontSize: '24px'
    },
    hr: {
        color: 'grey',
        width: '100%'
    },
    itemDetails: {
        fontSize: '18px',
        textAlign: 'left',
        fontFamily: 'Roboto'
    },
    cardButtons: {
        marginTop: '50px',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'space-evenly'
    },
    cardButton: {

    },
    edit: {
        marginTop: '5px',
        width: '100%',
        height: '20px',
        fontWeight: '900',
        backgroundColor: 'green',
        color: 'white'
    },
    delete: {
        marginTop: '5px',
        width: '100%',
        height: '20px',
        fontWeight: '900',
        backgroundColor: 'red',
        color: 'white'
    },
    view: {
        width: '100%',
        height: '20px',
        fontWeight: '900',
        backgroundColor: 'white',
        color: 'black'
    }
});

const truncate = (str, num) => {
    if(str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

const ItemCard = props => {
    const [item, setItem] = useState(props.item);
    const classes = useStyles();
    const history = useHistory();

    const deleteItem = () => {
        //props.deleteItem();
    }

    const editItem = () => {

    }

    const viewItem = () => {
        history.push(`/items/${item.itemId}`);
    }

    return (
        <Card className={classes.itemCard}>
            <h3 className={classes.itemTitle}> {item.itemName} </h3> 
            <hr className={classes.hr}/>
            <div className={classes.itemDetails}> 
                <p> {truncate(item.itemDescription, 40)} </p>
                <p> {item.itemLocation} </p>
                <p> ${item.itemPrice} </p> 
            </div>
            <div className={classes.cardButtons}> 
                    <Button className={classes.cardButton, classes.view} onClick={() => viewItem()}> VIEW </Button>
                    {
                        localStorage.getItem('userName') === item.userName &&
                        [
                            <Button key='editButton' className={classes.cardButton, classes.edit} onClick={() => editItem()}> EDIT </Button>,
                            <Button key='deleteButton' className={classes.cardButton, classes.delete} onClick={() => deleteItem()}> DELETE </Button>,
                            <Chip key='yourItemChip' style={{ marginTop: '25px', height:'25px', width:'150px', fontWeight:'900' }} color='secondary'  label='YOUR ITEM'/>
                        ]
                    }
            </div>

        </Card>
    );
}
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = { deleteItem, editItem }


export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);

