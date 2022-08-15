import React from 'react';
import styled from "styled-components";
import "boxicons"
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom"


const Container = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
 a {
    text-decoration: none;
    color: black;
  }
`;


const SearchContainer = styled.div`
  font-family: 'Jura', sans-serif;
  margin-left: 20px;
`;

const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 4px;
`;

const Menu = styled.div`
  display: flex;
`;
const CartIcon = styled.div`
  position: relative;
  font-size: 24px;
  color: #625e5e;

  :hover {
    color: darkcyan;
  }
`;

const Badge = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #f2f844;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.button`
  font-family: 'Jura', sans-serif;
  color: #625e5e;
  font-size: 24px;
  border: none;
  margin-left: 15px;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  background: none;
  a {
   text-decoration: none;
    color: #625e5e;
  }
  :hover {
    color: darkcyan;
  }
`;


const Header = () => {
    const {totalAmount} = useSelector(s => s.cart)
    const navigate = useNavigate();
    return (
        <Container>
            <Left>
                <Logo>
                    <Link to="/">
                        MaModa
                    </Link>
                </Logo>
                <SearchContainer>
                    <Input placeholder="Search..."/>
                </SearchContainer>
            </Left>
            <Menu>
                <MenuItem>
                    <Link to="/Register">
                        <i className='bx bx-user' />
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => navigate("cart")}>
                    <CartIcon>
                        <Badge>{totalAmount}</Badge>
                        <i className='bx bx-cart'/>
                    </CartIcon>
                </MenuItem>
            </Menu>

        </Container>
    );
};

export default Header;