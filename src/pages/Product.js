import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useEffect } from 'react'
import { PRODUCTS } from '../data/data/dummy-data'
const Container = styled.div`
  height: 30rem;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: 40rem;
  ${mobile({ padding: '10px', flexDirection: 'column' })};
`

const ImgContainer = styled.div`
  flex: 1;
  max-height: 20rem;

  &:hover {
    opacity: 0.5;
    background: rgba(255, 255, 255, 0.6);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  ${mobile({ height: '40vh' })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 400;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  display: inline-block;
  width: auto;
  height: 38px;
  background-color: #6ab070;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;
  border-left: 1px solid #6ab070;
  margin-left: 19px;
  position: relative;
  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;
  padding: 0 10px 0 10px;
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #6ab070;
  }
  &:after {
    content: '';
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  ${mobile({ width: '100%' })};
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-right: auto;
  margin-left: 10%;
  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState(null)
  const location = useLocation()
  useEffect(() => {
    for (let index = 0; index < PRODUCTS.length; index++) {
      const element = PRODUCTS[index]
      if (element.productId == location.pathname.split('/')[2]) {
        setProduct(element)
      }
    }
  }, [])
  const getProduct = () => {}
  return (
    <Container>
      <Navbar />
      <div className='container'>
        {product != null ? (
          <>
            <Wrapper>
              <ImgContainer>
                <Image src={product.picture} />
              </ImgContainer>
              <InfoContainer>
                <Title>{product.productName}</Title>
                <Desc>{product.description}</Desc>
                <Price>Rs.{product.price}</Price>
                <AddContainer>
                  <AmountContainer>
                    <span
                      onClick={() => {
                        if (count > 0) {
                          let temp = count - 1
                          setCount(temp)
                        }
                      }}
                    >
                      <Remove />
                    </span>
                    <Amount> {count}</Amount>
                    <span
                      onClick={() => {
                        if (count < product.stockQty) {
                          let temp = count + 1
                          setCount(temp)
                        }
                      }}
                    >
                      <Add />
                    </span>
                  </AmountContainer>

                  <Button>ADD TO CART</Button>
                </AddContainer>
              </InfoContainer>
            </Wrapper>
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </Container>
  )
}

export default Product
