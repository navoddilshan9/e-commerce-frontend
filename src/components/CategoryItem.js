import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'

const Maincontainer = styled.div`
  flex: 1;
`

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const ShopName = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: white;
`
const Title = styled.div`
  border-radius: 30px 30px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.8rem;
`

const CategoryItem = ({ item }) => {
  return (
    <Maincontainer>
      <Container>
        <Circle />
        <Image src={item.picture} />
        <Info>
          <Title>
            {' '}
            <ShopName>{item.categoryName} </ShopName>
          </Title>
        </Info>
      </Container>
    </Maincontainer>
  )
}

export default CategoryItem
