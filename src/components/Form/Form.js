import React, { useState } from 'react';
import './Form.css';
import FormSignup from './Signup';
import FormSuccess from './Success';
import Icon from '../../assets/images/i.png';
import styled from 'styled-components';


const MainSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 450px;
  }
`;


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <MainSection>
      <Container className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={Icon} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </Container>
    </MainSection>
  );
};

export default Form;