import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Paypal from '../Services/Paypal'
import { useEffect } from 'react'
import axios from 'axios'
import ProductCount from '../components/productCount'
import { PRODUCTS } from '../data/data/dummy-data'
const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  border-radius: 15px 15px;
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
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 100%;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  ${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  const [cart, setCart] = useState(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getCarts()
  }, [])

  const getCarts = async () => {
    const dataModal = {
      customerId: 1,
    }
    await axios
      .post('http://localhost:8000/api/v1/cart/getCartByCustomerId', dataModal)
      .then((res) => {
        console.log(res)
        setCart(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Container>
      <Navbar />
      <div className='container'>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Bottom>
            <Info>
              <div className='row'>
                <div className='col-md-8'>
                  {cart != null ? (
                    cart.map((item) => {
                      for (let j = 0; j < PRODUCTS.length; j++) {
                        const productItem = PRODUCTS[j]

                        if (item.itemId == productItem.productId) {
                          return (
                            <>
                              <div className='row'>
                                <div className='col-md-6'>
                                  <Image src={productItem.picture} />
                                </div>
                                <div className='col-md-6'>
                                  <Details>
                                    <ProductName>
                                      <b>Product:</b> {productItem.productName}
                                    </ProductName>
                                    <ProductName>
                                      {productItem.description}
                                    </ProductName>
                                  </Details>
                                  <ProductCount
                                    itemCount={item.qty}
                                    setTotal={setTotal}
                                    total={total}
                                    productItem={productItem}
                                  />
                                </div>
                              </div>
                            </>
                          )
                        }
                      }
                    })
                  ) : (
                    <></>
                  )}
                </div>
                <div className='col-md-4'>
                  <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Estimated Shipping</SummaryItemText>
                      <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Paypal />
                  </Summary>
                </div>
              </div>
            </Info>
          </Bottom>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  )
}

export default Cart
