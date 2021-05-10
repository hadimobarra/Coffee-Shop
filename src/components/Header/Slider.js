import React, {useState, useRef} from 'react';
import styled, {css} from 'styled-components/macro';
import { Button } from '../Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
  height: 86vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
      content: '';
      z-index: 2;
      position: absolute;
      width: 100%;
      height: 100vh;
      bottom: 0vh;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(0deg, 
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
      )
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc( 100% - 100px );
  color: #fff;
  float: right;

  h1 {
      font-size: clamp(1rem, 8vw, 2rem);
      font-weight: 400;
      text-transform: uppercase;
      text-align: right;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      margin-bottom: 0.8rem;
      display: flex;
      justify-content: flex-end;
  }

  p {
      margin-bottom: 1.2rem;
      display: flex;
      justify-content: flex-end;
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: .5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #000d1a;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
      background: #cd853f;
      transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons};
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons};
`;


const Hero = ({slides}) => {

    const [Current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);


    const nextSlide = () => {
      if (timeout.Current) {
        clearTimeout(timeout.Current);
    }
        setCurrent(Current === length - 1 ? 0 : Current + 1);
    };

    const prevSlide = () => {
        setCurrent(Current === 0 ? length - 1 : Current - 1 );
    };

    if (!Array.isArray(slides) || slides.length <=0 ) {
        return null;
    };

    return (
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index} >
                        {index === Current && (
                         <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt}  />
                            <HeroContent>
                              <h1>{slide.title}</h1>
                              <p>{slide.desc}</p>
                              <Button to={slide.path} primary='true'>
                                  {slide.label}
                                  <Arrow />
                              </Button>
                            </HeroContent>
                        </HeroSlider>
                        )}
                    </HeroSlide>
                );
            })}
            <SliderButtons>
              <PrevArrow onClick={prevSlide}/>
              <NextArrow onClick={nextSlide}/> 
            </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
