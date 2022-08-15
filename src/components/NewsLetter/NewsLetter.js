import React from 'react';
import styled from "styled-components";


const Container = styled.div`
   background-color: #f2f844;
   height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #625e5e;
`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
`;
const Input = styled.input`
  padding: 10px 20px;
  flex: 5;
  border-radius: 4px 0 4px 4px;
  border: 1px  solid darkcyan;
  border-right: none;
  
`;
const Button = styled.button`
  padding: 10px;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  color: darkcyan;
  border: 1px solid darkcyan;
  font-size: 16px;
  transition: 0.4s;
  :hover {
    background-color: darkcyan;
    color: #f2f844;
    transition: 0.4s;
  }
`;


const NewsLetter = () => {
    return (
        <div>
            <Container>
                <Title>NewsLetter</Title>
                <Desc>JOIN OUR NEWSLETTER TO STAY ON TOP OF THE LATEST TRENDS...
                </Desc>
                <InputContainer>
                    <Input  placeholder="Your e-mail"/>
                    <Button>Sign up</Button>
                </InputContainer>
            </Container>
        </div>
    );
};

export default NewsLetter;