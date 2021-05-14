import React from 'react';
import styled from 'styled-components';


const ProductsContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  background: rgba(255, 0, 200, 0.07);
  color: #fff;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-top: 5rem;
`;

const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

const ProductImg = styled.div`

  img {
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;

  &:hover {
      transform: rotate(-10deg);
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;


const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductDesc = styled.p`
  color: #000;
  margin-bottom: 1rem;
`;

const ProductsPrice = styled.p`
  color: #000;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 40px;

  &:hover {
      background: #ffc500;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #000;
  }
`;


const Products = ({data}) => {
    return (
        <ProductsContainer>
            
            <ProductWrapper>
                {data.map( (product, index) => {
                   return (
                       <ProductCard key={index}>
                           <ProductImg>
                               <img src={product.image} alt={product.alt} />
                           </ProductImg>  
                           <ProductInfo>
                             <ProductTitle> { product.name } </ProductTitle>
                             <ProductDesc>{product.desc}</ProductDesc>
                             <ProductsPrice>{product.price}</ProductsPrice>
                             <ProductButton>{product.button}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                   );
                   })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
