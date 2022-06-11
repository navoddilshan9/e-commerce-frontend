import React from "react";
import styled from "styled-components";
import { nearbyShops } from "../data";
import Shop from "./Shop";

const Container = styled.div`
  padding: 20px;
`;

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h2`
  align-items: center;
  width: 50%;
  padding: 10px;
`;

const NearbyShops = () => {
  return (
    <Container>
      <Title>NearBy Shops</Title>
      <Container2>
        {nearbyShops.map((item) => (
          <Shop item={item} key={item.id} />
        ))}
      </Container2>
    </Container>
  );
};

export default NearbyShops;
