import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import '../components/styles/Signtype.css'
import { blue, yellow } from '@material-ui/core/colors'
function SignupType() {
  return (
    <div className='main'>
      <div class='splitb leftb'>
        <h1 style={{ font: 'icon', fontSize: '30px' }}>
          Are you a seller or customer?
        </h1>
        <h2 style={{ font: 'icon', fontSize: '30px' }}>
          Choose your role here
        </h2>
      </div>

      <div class='splitb rightb'>
        <Button
          component={Link}
          to='/SignupSeller'
          variant='contained'
          style={{
            height: '5%',
            width: '55%',
            padding: '18px 36px',
            color: 'black',
            border: '2px solid',
            fontSize: '18px',
            backgroundColor: '#8a9c8f',
          }}
        >
          Sign up as Seller
        </Button>
        <br />
        <br />
        <Button
          component={Link}
          to='/SignupCustomer'
          variant='contained'
          style={{
            height: '5%',
            width: '55%',
            padding: '18px 36px',
            color: 'black',
            border: '2px solid',
            backgroundColor: '#8a9c8f',
            fontSize: '18px',
          }}
        >
          Sign up as Customer
        </Button>
      </div>
    </div>
  )
}
export default SignupType
