import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Locationbtn = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 30px 30px;
  border: none;
  background-color: #4d91f2;
  color: white;
  white-space: nowrap;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 100%;
  border-radius: 15px 15px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  padding: 5px;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
`;

const NavBar = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      {login ? (
        <>
          <Wrapper>
            <Left>
              <Locationbtn>Select your Location</Locationbtn>
            </Left>
            <Center>
              <SearchContainer>
                <Input />
                <Search style={{ color: "gray", fontSize: "16px" }} />
              </SearchContainer>
            </Center>
            <Right>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </MenuItem>
              </Link>
            </Right>
          </Wrapper>
        </>
      ) : (
        <>
          <Wrapper>
            <Right>
              <MenuItem>
                <Link to={`/login`}>
                  <Locationbtn> SignIn </Locationbtn>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/register/type`}>
                  <Locationbtn>Register </Locationbtn>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/admin`}>
                <Locationbtn> Admin </Locationbtn>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/seller`}>
                <Locationbtn> Seller </Locationbtn>
                </Link>
              </MenuItem>
            </Right>
          </Wrapper>
        </>
      )}
    </Container>
  );
};

export default NavBar;
