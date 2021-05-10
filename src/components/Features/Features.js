import React from 'react';
import styled from 'styled-components';
import FeaturePic from '../../assets/images/background.jpg';



const FeatureContainer = styled.div`
  background: linear-gradient(to right , rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: color-interpolation-filters;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 1rem;

  h1 {
      font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
      margin-bottom: 1rem;
      font-size: clamp(1rem, 3vw, 2rem);
  }
`;

const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 40px;

  &:hover {
      color: #fff;
      background: #e31837;
      transition: 0.2s ease-out;
      cursor: pointer;
  }
`;

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>قهوه روز</h1>
            <p>سفارش و دریافت قهوه روز در درب منزل در هر نقطه از شهر تهران</p>
            <FeatureButton>سفارش</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
