import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { useState } from 'react'
import { mobile } from '../responsive'
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
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  ${mobile({ marginBottom: '20px' })}
`
const ProductCount = ({ itemCount, setTotal, total, productItem }) => {
  const [count, setCount] = useState(itemCount)
  useEffect(() => {
    let ammount = count * productItem.price
    setTotal(ammount + total)
    console.log(ammount)
  }, [count])
  return (
    <div>
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
        <ProductPrice>Rs.{count * productItem.price}</ProductPrice>
      </PriceDetail>
    </div>
  )
}

export default ProductCount
