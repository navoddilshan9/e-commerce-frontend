import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Stores = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to={`/store/${item.id}`}>
          <Product item={item} key={item.id} />
        </Link>
      ))}
    </Container>
  )
}

export default Stores
