import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ShareButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 6rem;
  right: 2rem;
  background: #4d91f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: white;
`
const HomeButton = () => {
  return (
    <Link to={`/`}>
      <ShareButton>
        <div class='fa-2x'>
          <i className='fa fa-cog fa-spin text-white'></i>
        </div>
      </ShareButton>
    </Link>
  )
}

export default HomeButton
