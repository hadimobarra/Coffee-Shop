import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {BodySliderData} from '../../Data/BodySliderData';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import menu from '../../assets/icons/4.png';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderSection = styled.section`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  background: #e1e1e1;
`;

const SliderDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;

  img {
    background: brown;
    border-radius: 3px;
    margin-right: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    margin-right: 8px;
    font-weight: 400;
  }
`;


const BodySlider = () => {
  return (
    <SliderSection>
      <SectionHeader>
        <h2>منو کافی شاپ</h2>
        <img src={menu} alt=''/>
      </SectionHeader>
      <SliderDiv>
      <Swiper className='slider-main'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
    >
      {BodySliderData.map((item, index) => {
        return (
          <SwiperSlide key={index} className='body-section' >
            <div className='body-slider' >
              <img src={item.image} alt={item.alt} className='body-slider__img' />
              <h2 className='body-slider__name'>{item.name}</h2>
              <p className='body-slider__price' >{item.price}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
      </SliderDiv>
    </SliderSection>
  );
};

export default BodySlider;