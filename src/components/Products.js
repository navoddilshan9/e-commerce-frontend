import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { PRODUCTS } from '../data/data/dummy-data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  const location = useLocation()
  return (
    <Container>
      {PRODUCTS.map((item) => {
        console.log(item.productId)
        if (item.storeId == location.pathname.split('/')[2]) {
          return (
            <Link to={`/product/${item.productId}`}>
              <Product item={item} key={item.id} />
            </Link>
          )
        }
      })}
    </Container>
  )
}

export default Products
