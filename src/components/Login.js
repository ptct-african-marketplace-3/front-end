import * as React from 'react'
import axios from 'axios'
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  FormControlLabel,
  Button,
  Checkbox,
  TextField,
  CssBaseline,
  MenuItem,
  Select,
  Avatar,
  FormControl,
  InputLabel,
  Modal,
} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import * as yup from 'yup'

const initialFormState = {
  userName: '',
  password: '',
}

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      // color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      Sauti Africa
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
  },
})

export default function Login(props) {
  const history = useHistory();

  const [disabledButton, setDisabledButton] = useState(true)

  const [formData, setFormData] = useState(initialFormState)

  const [stateFlag, setStateFlag] = useState(false)

  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  })

  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .required('Must include a user.')
      .min(6, 'Name must be at least 6 characters long'),
    password: yup
      .string()
      .required('Must include a password.')
      .min(6, 'Password must be at least 6 characters long'),
  })

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      password: formData.password,

      userName: formData.userName,
    }
    console.log('REQ', data)
    axiosWithAuth()
      .post(
        'https://ptct-african-marketplace-3.herokuapp.com/api/auth/login',
        data
      )
      .then((res) => {
        console.log('RES', res);
        setFormData({ ...initialFormState });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.ownerId);
        localStorage.setItem('userName', data.userName);
        history.push('/');
        history.go(0);
      })
      .catch(err => {
        console.log(err);
        
      });
  }

  const handleChange = (e) => {
    // debugger
    const { name, type } = e.target
    const valueToUse = type === 'checkbox' ? 'checked' : 'value'
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target[valueToUse],
      }
    })

    setFormErrors(name, e.target[valueToUse])
  }

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setDisabledButton(!valid))
  })

  useEffect(() => {
    console.log('INITIAL STATE', initialFormState)
  }, [])

  useEffect(() => {
    setStateFlag(true)

    return setStateFlag(false)
  }, [formData])

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' id='container' maxWidth='xs'>
          <CssBaseline
          style={{
            backgroundColor: 'black',
            color: 'black',
          }}
        />

        <Box
          id='boxAfterContainer'
          mt={24}
          sx={{
            marginTop: '0px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card
            id='card'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '200px',
              minWidth: '25vw',
              minHeight: '60vh',
            }}
          >
            <Avatar id='avatar' sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography id='signInTitle' component='h1' variant='h5'>
              Login
            </Typography>
            <Box
              id='boxBeforeTextField'
              component='form'
              onSubmit={handleSubmit}
              noValidate
              px={'2rem'}
              sx={{
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <TextField
                id='userName'
                name='userName'
                value={formData.userName}
                onChange={(e) => handleChange(e)}
                variant='outlined'
                margin='normal'
                fullWidth
                label='User Name'
                autoFocus
              />
              <TextField
                id='password'
                name='password'
                value={formData.password}
                onChange={(e) => handleChange(e)}
                variant='outlined'
                margin='normal'
                fullWidth
                label='Password'
                type='password'
                autoComplete='current-password'
              />

              <Button
                id='button'
                type='submit'
                // margin='normal'
                fullWidth
                style={{
                  height: '3.5rem',
                  margin: '1rem 0 0 0',
                }}
                variant='contained'
                disabled={disabledButton}
              >
                Submit
              </Button>
              <Grid
                container
                id='lowerGrid1'
                style={{ margin: '1rem 0 1rem 0' }}
              >
                {/* <Grid id='forgotPasswordGrid' item xs>
                  <Link
                    id='forgotPasswordLink'
                    href='#'
                    variant='body2'
                    style={{
                      display: 'block',
                      margin: '0.5rem 0 0.5rem 0',
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid> */}
                 <Grid item id='lowerGrid2'>
                  <Link
                    to='/register'
                    id='createAccountLink'
                    href='#'
                    variant='body2'
                    style={{
                      display: 'block',
                      margin: '0.5rem 0 0.5rem 0',
                    }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
