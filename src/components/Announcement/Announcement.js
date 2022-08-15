import React from 'react';
import styled, {keyframes} from "styled-components";


const Title = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform:  translateX(-100%) ;
  }
`

const Container = styled.div`

  color: #f2f844;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
animation:  10s ${Title} linear infinite;
`;

const Liner = styled.div`
  background-color: darkcyan;
`;


const Announcement = () => {
    return (
        <Liner>
        <Container>
         EXPRESS DELIVERY AVAILABLE WORLDWIDE
        </Container>
        </Liner>
    );
};

export default Announcement;