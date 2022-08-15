import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  color: #625e5e;

`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 20px;


`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 40px;
`;
const Right = styled.div`
  flex: 1;
  padding: 15px;
  margin-left: 40px;

`;
const Logo = styled.h1`
  margin-bottom: 15px;
  color: black;
`;
const Desc = styled.p`
  margin-bottom: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
  color: black;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  font-size: 26px;
  cursor: pointer;

  :hover {
    color: darkcyan;
  }

`;
const Title = styled.h3`
  color: black;
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  margin-bottom: 5px;

`;
const ContactContainer = styled.div`
  flex: 1;
  padding: 15px;
`;

const Contact = styled.h3`
  color: black;
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  margin-bottom: 5px;
`;
const ListAbout = styled.ul`
  list-style: none;
`;
const ListAboutItem = styled.li`
  margin-bottom: 5px;
`;


const Footer = () => {
    return (
        <div>
            <Container>
                <Left>
                    <Logo>MaModa</Logo>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
                        laboriosam libero odit repellendus saepe, sit! Alias aliquid culpa.</Desc>
                    <SocialContainer>
                        <SocialIcon><i className='bx bxl-facebook-circle'/></SocialIcon>
                        <SocialIcon><i className='bx bxl-instagram'/></SocialIcon>
                        <SocialIcon><i className='bx bxl-twitter'/></SocialIcon>
                        <SocialIcon><i className='bx bxl-telegram'/></SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Customer care centre</Title>
                    <List>
                        <ListItem>FAQs</ListItem>
                        <ListItem>Delivery</ListItem>
                        <ListItem>Returns</ListItem>
                        <ListItem>Size Guide</ListItem>
                        <ListItem>Payment</ListItem>
                        <ListItem>Refund Policy</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>About Us</Title>
                    <ListAbout>
                        <ListAboutItem>About MaModa</ListAboutItem>
                        <ListAboutItem>Terms & Conditions</ListAboutItem>
                        <ListAboutItem>Sustainability</ListAboutItem>
                        <ListAboutItem>Privacy Policy</ListAboutItem>
                        <ListAboutItem>Cookie Policy</ListAboutItem>
                    </ListAbout>
                </Right>
                <ContactContainer>
                    <Contact>Contact</Contact>
                    <ContactItem>Praha 10, Vrsovice, Na Louzi 1308/23</ContactItem>
                    <ContactItem>+420 770 567 456</ContactItem>
                </ContactContainer>
            </Container>
        </div>
    );
};

export default Footer;