import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Paypal from '../Services/Paypal'
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
  width: 200px;
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

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

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
  const [count, setCount] = useState(0)
  return (
    <Container>
      <Navbar />
      <div className='container'>
        <Wrapper>
          <Title>YOUR BAG</Title>
          {/* <Top>
            <Link to={'/'}>
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
          </Top> */}
          <Bottom>
            <Info>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                    </div>
                    <div className='col-md-6'>
                      <Details>
                        <ProductName>
                          <b>Product:</b> JESSIE THUNDER SHOES
                        </ProductName>
                        <ProductName>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptates commodi non porro atque dicta
                          asperiores neque quod nulla consequuntur molestias rem
                          esse optio similique accusamus, blanditiis nesciunt
                          distinctio velit ipsa!
                        </ProductName>
                      </Details>
                    </div>
                  </div>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove
                        onClick={() => {
                          if (count > 0) {
                            let temp = count - 1
                            setCount(temp)
                          }
                        }}
                      />
                      <ProductAmount>
                        {' '}
                        <Amount> {count}</Amount>
                      </ProductAmount>
                      <Add
                        onClick={() => {
                          let temp = count + 1
                          setCount(temp)
                        }}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>$ {count * 120}</ProductPrice>
                  </PriceDetail>
                </div>
                <div className='col-md-4'>
                  <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>$ 80</SummaryItemPrice>
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
