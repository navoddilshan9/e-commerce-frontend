import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
  border-radius: 30px 15px;
`;


const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 15px;
  text-align: center;
  padding: 20px;
`;



const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
          <Title>{item.title}</Title>
      </Link>
    </Container>
  );
};

export default CategoryItem;
