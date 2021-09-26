import React, {useState, useEffect} from 'react';
import {Card, Container, Box, makeStyles, TextField, Typography, Button} from '@material-ui/core'
import { createItem, editItem } from '../actions/ownerActions';
import { createListingSchema } from '../schemas/createListingSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        margin: '0px auto',
        top: '200px',
        left: '90px',
        width: '90vw',
        height: '100vh',
        border: '2px solid lightgrey',
        backgroundColor: 'grey'
    },
    card: {
        margin: '0px auto',
        width: '50%',
        height: '100%',
    },
    form: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center'
    },
    input: {
        margin: '0px auto',  
        width: '50%'
    },
    listingHeader: {
        marginTop: '100px',
        fontWeight: '900',
        fontSize: '32px'
    },
    hr: {
        width: '30%'
    },
    button: {
        backgroundColor: 'grey',
        color: 'white'
    },
});

const EditListing = props => {
    const classes = useStyles();
    const [form, setForm] = useState({
        itemId: 0,
        itemName: '',
        itemDescription: '',
        itemPrice: '',
        ownerId: localStorage.getItem('userId'),
        // userName: localStorage.getItem('userName'),
        // location: 'South Africa'
    });
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();

    const setFormErrors = (name, value) => {
        yup
            .reach(createListingSchema, name)
            .validate(value)
            .then(() => {})
            .catch(err => {})
    }

    const handleChange = e => {
        console.log('++++++++++++++++++++++++++++');
        console.log(form);
        setForm(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
        setFormErrors(e.target.name, e.target.value);
    }

    useEffect(() => {
        setForm({
            itemId: props.currentEditItem.itemId,
            itemName: props.currentEditItem.itemName,
            itemDescription: props.currentEditItem.itemDescription,
            itemPrice: props.currentEditItem.itemPrice,
            ownerId: props.currentEditItem.ownerId,
        });
    }, [])

    useEffect(() => {
        createListingSchema.isValid(form)
            .then(valid => setDisabled(!valid));
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitting...');
        console.log(form);
        props.editItem(form, history.push);
        // history.push(`/user/${localStorage.getItem('userId')}`)
    }

    return (
        <Container>
            <Box className={classes.root}>
                <Card className={classes.card}> 
                    <form className={classes.form} onSubmit={handleSubmit}>
                            <Typography className={classes.listingHeader}> Edit your Listing: {form.itemName} </Typography>
                            <hr className={classes.hr}/>
                            <TextField
                                type='text'
                                name='itemName'
                                label='Item Name'
                                value={form.itemName}
                                onChange={e => handleChange(e)}
                                autoFocus
                                className={classes.input}
                            />
                            <TextField
                                type='text'
                                name='itemDescription'
                                label='Item Description'
                                minRows={5}
                                maxRows={10}
                                multiline={true}
                                value={form.itemDescription}
                                onChange={e => handleChange(e)}
                                autoFocus
                                className={classes.input}
                            />
                            <TextField
                                type='number'
                                name='itemPrice'
                                label='Item Price'
                                value={form.itemPrice}
                                onChange={e => handleChange(e)}
                                className={classes.input}
                            />
                            <Button type='submit' id='button' disabled={disabled}> SUBMIT </Button>
                    </form>
                </Card>
            </Box>
        </Container>
    )
}
const mapStateToProps = (state) => { 
    return {
        ...state,
        currentEditItem: state.ownerReducer.currentEditItem
    }
}
const mapDispatchToProps = { editItem }


export default connect(mapStateToProps, mapDispatchToProps)(EditListing);

