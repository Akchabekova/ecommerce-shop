import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";

const Container = styled.div`
  padding: 15px;
  width: 25%;
  height: 350px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  color: white;
  border-radius: 50%;
  margin: 10px;
  font-size: 30px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Box = styled.div`
  background-color: #dcf5f8;
  padding: 10px;
  height: 100%;
  position: relative;

  :hover ${Info} {
    opacity: 1;
    visibility: visible;
  }
`;

const CatalogItem = ({product}) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <Box>
                <Image src={product.img}/>
                <Info>
                    <Icon onClick={()=>dispatch(addToCart(product))}><i className='bx bx-cart-add' /></Icon>
                    <Icon><i className='bx bx-search-alt-2' /></Icon>
                    <Icon><i className='bx bx-heart' /></Icon>
                </Info>
            </Box>
        </Container>
    );
};

export default CatalogItem;