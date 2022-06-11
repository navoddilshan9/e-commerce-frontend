import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  padding: 30px;
  justify-content: space-between;
  flex-direction: column;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Container2 = styled.div`
  display: flex;
  
`;

const Title = styled.h2`
  align-items: center;
  width: 50%;
  padding: 10px;
`;

const Categories = () => {
  return (
    <Container>
      <Title> Popular Categories</Title>
      <Container2>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container2>
    </Container>
  );
};

export default Categories;
