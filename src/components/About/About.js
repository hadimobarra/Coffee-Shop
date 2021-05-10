import React from 'react';
import styled from 'styled-components';
import { ProductsData, HeadData} from '../../Data/AboutData';


const ProductContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  right: 0;
`;

const ProductWrap = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductDesc = styled.div`
  text-align: center;
  margin-top: 2rem;

  h1 {
      font-size: clamp(2rem, 8vw, 3rem);
      font-weight: 500;
      color: #000;
  }

  p {
      font-size: clamp( 1rem, 3vw, 1rem);
      font-weight: 200;
      margin-top:1rem;
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
      width: 80%;
      display: block;
  }
`;

const Product = styled.div`
  text-align: center;
  margin: 20px;
  
  img {
      height: 30vh;
      width: 18vw;
      border-radius: 50%;
      max-width: 100%;
      
      &:hover {
          transform: scale(1.1);
          transition: 0.3s ;
          cursor: pointer;
      }
  }

  h3 {
      margin-top: 1rem;
      font-size: clamp(1rem, 8vw, 1.5rem);
      font-weight: 200;
      background:  rgba(255, 0, 0, 0.3);
      border-radius: 50px;

      &:hover {
          cursor: pointer;
          color: brown;
          background: yellow;
          transition: 0.3s ease-in-out;
          transform: scale(1);
          color: #000;
      }
  }

  p {
      font-size: clamp(1rem, 8vw, 1rem);
      color: rgba(0, 0, 0, 0.5);
      margin-top: 1rem;
      margin: 1rem ;
  }
`;


const About = () => {
    return (
        <ProductContainer>
            <ProductWrap>
                <ProductDesc>
                    <h1>{HeadData.title}</h1>
                    <p>{HeadData.text}</p>
                </ProductDesc>
                <Products>
                    {ProductsData.map((item, index) => {
                        return (
                            <Product key={index}>
                                <img src={item.image} alt={item.alt} />
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </Product>
                        );
                    })}
                </Products>

            </ProductWrap>
        </ProductContainer>
    )
}

export default About;
