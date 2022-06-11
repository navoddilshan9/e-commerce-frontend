import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'

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
`

const Categories = () => {
  return (
    <div className='container '>
      <Container>
        <Title> Popular Categories</Title>
        <Container2>
          {categories.map((item) => (
            <Link to={`/stores/${item.id}`}>
              <CategoryItem item={item} key={item.id} />
            </Link>
          ))}
        </Container2>
      </Container>
    </div>
  )
}

export default Categories
