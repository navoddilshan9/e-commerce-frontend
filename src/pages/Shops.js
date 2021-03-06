import styled from 'styled-components'
import Footer from '../components/Footer'
import Newsletter from '../components/Map'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`
const Option = styled.option``

const Shops = () => {
  return (
    <Container>
      <Navbar />

      <Title>Dresses</Title>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Shops
