import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Store from './Store'
import { STORES } from '../data/data/dummy-data'
import { useEffect } from 'react'
import { useState } from 'react'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Stores = () => {
  const location = useLocation()

  return (
    <Container>
      {STORES.map((item) => {
        if (
          location.pathname.split('/')[2] == item.categoryId[0] ||
          location.pathname.split('/')[2] == item.categoryId[1]
        ) {
          return (
            <Link to={`/store/{item.storeId}`}>
              <Store item={item} key={item.id} />
            </Link>
          )
        }
      })}
    </Container>
  )
}

export default Stores
