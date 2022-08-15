import React from 'react';
import {slides} from "../../data"
import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 0.4s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  position: static;
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 50vw;
  height: 90%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
`;

const Description = styled.p`
  font-size: 24px;
  margin: 40px 0;
  color: darkcyan;
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

const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  font-size: 50px;
  left: ${(props) => props.direction === "left" ? "30px" : "unset"};
  right: ${(props) => props.direction === "right" ? "30px" : "unset"};
  transition: 0.4s;
  cursor: pointer;
  color: darkcyan;

  :hover {
    color: white;
  }
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const navigation = useNavigate()
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1)
        }
        if (direction === "right") {
            setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div>
            <Container>
                <Arrow onClick={() => handleClick("left")} direction="left">
                    <i className='bx bxs-chevron-left'/>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {
                        slides.map(slide => (
                            <Slide bg={slide.bgColor} key={slide.id}>
                                <ImgContainer>
                                    <Image src={slide.img}/>
                                </ImgContainer>
                                <InfoContainer>
                                    <Title>{slide.title}</Title>
                                    <Description>{slide.desc}</Description>
                                    <Button>
                                        // onClick={() => navigation("/catalogItem")}>
                                            Buy now

                                    </Button>
                                </InfoContainer>
                            </Slide>
                        ))
                    }
                </Wrapper>
                <Arrow onClick={() => handleClick("right")} direction="right">
                    <i className='bx bxs-chevron-right'></i>
                </Arrow>
            </Container>
        </div>
    );
};

export default Slider;