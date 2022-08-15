import React, {useEffect} from 'react';
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../../components/CartItem";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {ButtonTemplate} from "../../mixines/mixines";
import {calculateTotal} from "../../redux/slices/cartSlice";


const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 40px 30px;
`;
const Title = styled.h1`

`;
const TopButton = styled.button`
  ${ButtonTemplate}
`;
const Info = styled.div`
  flex: 2;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid #625e5e;
  height: 243px;
  padding: 20px;
  border-radius: 4px;
  margin-left: 30px;
`;
const SummaryTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 25px;
  text-align: center;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryItemTitle = styled.h4`
  margin: 0 5px 10px;

`;
const SummaryItemPrice = styled.div`

`;
const Button = styled.button`
  ${ButtonTemplate};
  width: 100%;
  margin-top: 5px;
`;
const Bottom = styled.div`
  display: flex;
`;

const Cart = () => {
    const {cart, totalPrice, totalAmount} = useSelector(s => s.cart)
    const dispatch = useDispatch();
    const navigation = useNavigate()
    useEffect( () => {
    dispatch(calculateTotal())
    }, [dispatch, totalAmount])
    return (
        <div>
            <Announcement/>
            <Header/>
            <Container>
                <Wrapper>
                    <TopButton onClick={() => navigation("/")}>Сontinue shopping</TopButton>
                    <Bottom>
                        <Info>
                            {
                                cart.map((item) =>
                                    <CartItem key={item.id} item={item}/>
                                )
                            }
                        </Info>
                        <Summary>
                            <SummaryTitle>Order Summary</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemTitle>Subtotal</SummaryItemTitle>
                                <SummaryItemPrice> $ {totalPrice}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemTitle>Shopping</SummaryItemTitle>
                                <SummaryItemPrice>50$</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemTitle>Discount</SummaryItemTitle>
                                <SummaryItemPrice>130$</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemTitle>Total</SummaryItemTitle>
                                <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
                            </SummaryItem>
                            <Button>Checkout</Button>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Cart;