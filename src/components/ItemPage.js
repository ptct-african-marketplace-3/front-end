import { makeStyles, Container, Box, Card, Typography, Button, Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { setCurrentEditItem } from '../actions/ownerActions';

const useStyles = makeStyles({
    root: {
        marginTop: '200px',
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
});

const ItemPage = props => {
    const classes = useStyles();
    const [item, setItem] = useState(props.currentViewItem);
    const history = useHistory();

    const deleteItem = () => {
        //props.deleteItem();
    }

    const editItem = () => {
        props.setCurrentEditItem(item);
        history.push('/editListing');
    }

    return (
        <Container className={classes.root}>
            <Box> 
                <Card> 
                    <h2> {item.itemName} </h2>
                    <hr/>
                    <Typography> {item.itemDescription} </Typography>
                    <Typography> ${item.itemPrice} </Typography>
                    {
                        localStorage.getItem('userName') === item.userName &&
                        [
                            <Button key='editButton' className={classes.cardButton, classes.edit} onClick={() => editItem()}> EDIT </Button>,
                            <Button key='deleteButton' className={classes.cardButton, classes.delete} onClick={() => deleteItem()}> DELETE </Button>,
                            <Chip key='yourItemChip' style={{ marginTop: '25px', height:'25px', width:'150px', fontWeight:'900' }} color='secondary'  label='YOUR ITEM'/>
                        ]
                    }
                </Card>
            </Box>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        ...state,
        currentViewItem: state.ownerReducer.currentViewItem
    }
}
const mapDispatchToProps = { setCurrentEditItem }

export default connect(mapStateToProps, {})(ItemPage);
