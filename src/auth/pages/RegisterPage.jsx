import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'facu@google.com',
  password: 12345,
  displayName: 'Facundo Cordoba'
}

const formValidations = {
  email: [ (value) => value.includes('@', 'Invalid email')],
  password: [ (value) => value.length >= 6, 'This password is not secure'],
  displayName: [ (value) => value.length >= 1, 'You need a username'],
}

export const RegisterPage = () => {

const { 
  formState,
  displayName,
  email,
  password,
  onInputChange,
  isFormValid,
  displayNameValid,
  emailValid,
  passwordValid,
} = useForm(formData, formValidations);

console.log(displayNameValid);

const onSubmit = (event) => {
  event.preventDefault();
  console.log(formState);
}

  return (

    <AuthLayout title='Register'>
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Complete Name"
              type="text"
              placeholder="Enter your name"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>

          {/* <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Last name"
              type="text"
              placeholder="Enter your last name"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid> */}

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email address"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Sing up
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Log in
            </Link>
          </Grid>

        </Grid>
      </form>


    </AuthLayout>


  )
}
