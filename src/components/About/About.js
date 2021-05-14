import React from 'react';
import styled from 'styled-components';
import {HeadData, Icons} from '../../Data/AboutData';


const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  top: 0;
  right: 0;
`;

const ProductWrap = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
`;

const ProductDesc = styled.div`
  text-align: center;
  margin-top: 2rem;

  h1 {
      font-size: clamp(1rem, 5vw, 2.5rem);
      font-weight: 240;
      color: #000;
  }

  p {
      font-size: clamp( 0.9rem, 2vw, 1.2rem);
      font-weight: 200;
      margin-top:2rem;
  }
`;

const ProductIconsInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
      width: 80%;
      display: block;
  }
`;


const Info = styled.div`
  margin: 2rem 0;
  transform: translate( 3rem, 0);
  border-right: solid 2px #e1e1e1;
  padding: 10px;
  border-radius: 5px;

  h1 {
      margin-top: 0rem;
      font-size: 18px;
      font-weight: bold;
  }

  p {
      margin-top: 1rem;
      font-size: 14px;
      color: #212932;
  }

  &:hover {
      transition: 0.3s ease-in-out;
      box-shadow: 0 0 15px 0 gray;
  }
`;

const About = () => {
    return (
        <ProductContainer>
            <ProductWrap>
                <ProductDesc>
                    <h1>{HeadData.title}</h1>
                    <p>{HeadData.text}</p>
                    <p>{HeadData.desc}</p>
                </ProductDesc>
                <ProductIconsInfo>
                    {Icons.map((item, index) => {
                        return (
                            <Info key={index} >
                                <img src={item.image} alt=''/>
                                <h1>{item.name}</h1>
                                <p>{item.desc}</p>
                            </Info>
                        );
                    })}
                </ProductIconsInfo>
            </ProductWrap>
        </ProductContainer>
    )
}

export default About;
