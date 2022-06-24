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
         List your items to bring more sales?
        </h1>
        <h2 style={{ font: 'icon', fontSize: '30px' }}>
          Want more profits
        </h2>
      </div>

      <div class='splitb rightb'>
        <Button
          component={Link}
          to='/addproduct'
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
          Add product
        </Button>
        <br />
        <br />
        <Button
          component={Link}
          to='/viewproduct'
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
          View Products
        </Button>
      </div>
    </div>
  )
}
export default SignupType
