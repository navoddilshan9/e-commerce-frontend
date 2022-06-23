import React, { useState } from 'react'
import Axios from 'axios'
import '../components/styles/main.css'
import Button from '@material-ui/core/Button'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik'

const SignupCustomer = ({ submitForm }) => {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const addCustomer = (values) => {
    Axios.post('http://localhost:3001/customerReg', {
      fname: values.fname,
      lname: values.lname,
      contactno: values.contactno,
      email: values.email,
      password: values.password,
    }).then((response) => {
      // alert(response.data.msg)
      window.location = '/login'
    })
  }

  const phoneRegExp = '^[0][1-9].{8}$'

  const digitsOnly = (value) => /^\d+$/.test(value)
  const validationsRegister = yup.object().shape({
    fname: yup.string(),

    lname: yup.string(),

    contactno: yup
      .string()
      .length(10, 'Phone number length should 10 characters long')
      .test(
        'Digits only',
        'Phone number should contain only digits',
        digitsOnly
      )
      .matches(phoneRegExp, 'invalid '),

    email: yup.string().email('Invalid email'),

    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long'),

    confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'The passwords are different'),
  })

  return (
    <div className='register'>
      <div className='container'>
        <h1>Sign up as customer</h1>
        <Formik
          initialValues={{}}
          onSubmit={addCustomer}
          validationSchema={validationsRegister}
        >
          <Form className='register-form'>
            <div className='register-form-group'>
              <Field
                name='fname'
                className='form-field'
                placeholder='First name'
                required
              />

              <ErrorMessage
                component='span'
                name='fname'
                className='form-error'
              />
            </div>
            <div className='register-form-group'>
              <Field
                name='lname'
                className='form-field'
                placeholder='Last name'
                required
              />
              <ErrorMessage
                component='span'
                name='lname'
                className='form-error'
              />
            </div>

            <div className='register-form-group'>
              <Field
                name='contactno'
                className='form-field'
                placeholder='Contact number'
                required
              />
              <ErrorMessage
                component='span'
                name='contactno'
                className='form-error'
              />
            </div>

            <div className='register-form-group'>
              <Field
                name='email'
                className='form-field'
                placeholder='Email'
                required
              />

              <ErrorMessage
                component='span'
                name='email'
                className='form-error'
              />
            </div>

            <div className='form-group'>
              <Field
                name='password'
                className='form-field'
                placeholder='Password'
                type={passwordShown ? 'text' : 'password'}
                required
              />

              <VisibilityOffIcon onClick={togglePassword} />

              <ErrorMessage
                component='span'
                name='password'
                className='form-error'
              />
            </div>

            <div className='form-group'>
              <Field
                name='confirmation'
                className='form-field'
                placeholder='Confirm password'
                type={passwordShown ? 'text' : 'password'}
                required
              />
              <VisibilityOffIcon onClick={togglePassword} />
              <ErrorMessage
                component='span'
                name='confirmation'
                V
                className='form-error'
              />
            </div>

            <br />

            <Button
              type='submit'
              variant='outlined'
              color='primary'
              style={{
                height: '2%',
                width: '32%',
                color: 'black',
                border: '2px solid',
                fontSize: '15px',
                backgroundColor: '#8a9c8f',
              }}
            >
              Sign up
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
export default SignupCustomer
