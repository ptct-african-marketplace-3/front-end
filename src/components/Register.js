import * as React from 'react'
import axios from 'axios'
import {
  Typography,
  Container,
  Grid,
  Box,
  Link,
  Card,
  FormControlLabel,
  Button,
  Checkbox,
  TextField,
  CssBaseline,
  MenuItem,
  Select,
  Avatar,
} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import * as yup from 'yup'

const initialFormState = {
  userName: '',
  email: '',
  password: '',
  location: '',
  remember: false,
}

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
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

export default function Register() {
  const [disabledButton, setDisabledButton] = useState(true)

  const [formData, setFormData] = useState(initialFormState)

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    location: '',
    remember: '',
  })

  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .required('Must include a user.')
      .min(6, 'Name must be at least 6 characters long'),
    email: yup
      .string()
      .email('Must be a valid email address.')
      .required('Must include email address.'),
    password: yup
      .string()
      .required('Must include a password.')
      .min(6, 'Password must be at least 6 characters long'),
    location: yup.string().required('Location is Required'),
    remember: yup.boolean().oneOf([true, false]),
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
      userName: formData.userName,
      password: formData.password,
      location: formData.location,
      email: formData.email,
    }
    console.log('RES', data)
    axios
      .post(
        'https://ptct-african-marketplace-3.herokuapp.com/api/auth/register',
        data
      )
      .then((res) => {
        console.log('RES', res)
        setFormData({ ...initialFormState })
      })
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
              minWidth: '25vw',
              minHeight: '60vh',
            }}
          >
            <Avatar id='avatar' sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography id='signInTitle' component='h1' variant='h5'>
              Sign in
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
                value={formData.user}
                onChange={(e) => handleChange(e)}
                variant='outlined'
                margin='normal'
                fullWidth
                label='User Name'
                autoFocus
              />
              <TextField
                id='email'
                name='email'
                value={formData.email}
                onChange={(e) => handleChange(e)}
                variant='outlined'
                margin='normal'
                fullWidth
                label='Email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                id='password'
                name='password'
                value={formData.pass}
                onChange={(e) => handleChange(e)}
                variant='outlined'
                margin='normal'
                fullWidth
                label='Password'
                type='password'
                autoComplete='current-password'
              />
              <Select
                labelId='location'
                name='location'
                id='location'
                value={formData.location}
                label='Location'
                variant='outlined'
                fullWidth
                style={{ margin: '1rem 0 1rem 0' }}
                onChange={(e) => handleChange(e)}
              >
                <MenuItem name='location' value='place1'>
                  Place 1
                </MenuItem>
                <MenuItem name='location' value='place2'>
                  Place 2
                </MenuItem>
                <MenuItem name='location' value='place3'>
                  Place 3
                </MenuItem>
              </Select>

              <FormControlLabel
                id='remember'
                control={<Checkbox />}
                name='remember'
                label='Remember'
                checked={formData.remember}
                onChange={(e) => handleChange(e)}
                style={{ margin: '0 0 1rem 0' }}
              />
              <Button
                id='button'
                type='submit'
                fullWidth
                style={{ height: '3.5rem' }}
                variant='contained'
                disabled={disabledButton}
              >
                Sign In
              </Button>
              <Grid
                container
                id='lowerGrid1'
                style={{ margin: '1rem 0 1rem 0' }}
              >
                <Grid id='forgotPasswordGrid' item xs>
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
                </Grid>
                <Grid item id='lowerGrid2'>
                  <Link
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
