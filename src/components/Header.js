import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        zIndex: '1',
        position: 'fixed',
        boxSizing: 'border-box',
        paddingBottom: '100px',
        width: '100%',
        height: '75px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'baseline',
        backgroundColor: 'white',
        opacity: 0.98,
    },
    headerTitle: {
        whiteSpace: 'nowrap',
        margin: '0px auto',
        marginLeft: '100px',
        marginRight: '500px',
        width: '300px',
        textOverflow: '',
        padding: '0px auto',
        color: 'black',
        textDecoration: 'underline',
        textShadow: '2px 5px 5px white',
        textDecorationThickness: '5px',
        fontSize: '3rem',
        fontFamily: 'Roboto'
    },
    headerFlag: {
        backgroundImage: 'linear-gradient(red 25%, black, #33cc33)',
        width: '150px',
        height: '100px'
    },
    headerNav: {
        width: '100em',
        margin: '0px auto',
        marginRight: '100px',
        height: 'inherit',
        display : 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },
    headerLink: {
        margin: '5px auto',
        padding: '2px 15px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '18px',
        fontWeight: '900',
    }
});

const Header = props => {
    const classes = useStyles();
    const history = useHistory();

    const logout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('userName', '');
        history.go(0);
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.headerTitle}> African Marketplace </h1>
            <nav className={classes.headerNav}>
                <Link className={classes.headerLink} to='/'> HOME  </Link>
                <Link className={classes.headerLink} to='/about'> ABOUT </Link>
                {
                
                localStorage.getItem('token') === '' ?
                    <Link className={classes.headerLink} to='/login'> LOGIN/REGISTER </Link>
                    :
                    ( 
                        [
                            <Link className={classes.headerLink} key='browse' to='/browse'> BROWSE </Link>,
                            <Link className={classes.headerLink} key='user' to={`/user/${localStorage.getItem('userId')}`}> {localStorage.getItem('userName').toUpperCase()} </Link>,
                            <Button className={classes.headerLink} key='logout' onClick={logout}> LOGOUT </Button>    
                        ]
                    )
                }
                </nav>
        </header>
    )
}

export default Header;
