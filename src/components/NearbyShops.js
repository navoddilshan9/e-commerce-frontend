import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { STORES } from '../data/data/dummy-data'
import Shop from './Shop'

const Container = styled.div`
  padding: 20px;
`

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled.h2`
  align-items: center;
  width: 50%;
  padding: 10px;
  white-space: nowrap;
`

const NearbyShops = () => {
  return (
    <div className='container'>
      <Container>
        <Title>NearBy Shops</Title>
        <Container2>
          {STORES.map((item) => (
            <Link to={`/store/${item.storeId}`}>
              <Shop item={item} key={item.id} />
            </Link>
          ))}
        </Container2>
      </Container>
    </div>
  )
}

export default NearbyShops
