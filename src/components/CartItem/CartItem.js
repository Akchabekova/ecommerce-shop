import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {decrease, increase} from "../../redux/slices/cartSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid  #625e5e;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 20px;
`;
const Image = styled.img`
width: 200px;

`;
const Details= styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
margin-bottom: 10px;
`;
const ProductId = styled.span`
  margin-bottom: 10px;
`;
const PriceDetails = styled.h4`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer= styled.h4`
 display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Counter = styled.div`
cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
 display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const ProductsPrice = styled.div`
font-size: 30px;
`;
const ProductDesc = styled.div`
margin-bottom: 10px;
`;
const ProductAmount = styled.div`
font-size: 30px;
  margin: 10px;
`;




const CartItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <Container>
           <Image src={item.img} />
            <Details>
                <ProductName><b>Product:</b> {item.title}</ProductName>
                <ProductId><b>Id:</b> {item.id}</ProductId>
                <ProductDesc><b>About:</b> {item.desc}</ProductDesc>
                <ProductDesc><b>Size:</b> {item.size}</ProductDesc>
            </Details>
            <PriceDetails>
                <ProductAmountContainer>
                    <Counter onClick = {() => dispatch(decrease(item.id))}>-</Counter>
                   <ProductAmount>{item.amount}</ProductAmount>
                    <Counter onClick = {() => dispatch(increase(item.id))}>+</Counter>
                </ProductAmountContainer>
                <ProductsPrice> $ {(item.price * item.amount).toFixed(2)}</ProductsPrice>
            </PriceDetails>
        </Container>
    );
};

export default CartItem;