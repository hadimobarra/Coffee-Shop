import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaFacebook,
        FaInstagram, 
        FaLinkedin,
        FaTwitter} from 'react-icons/fa';


const FooterContainer = styled.div`
  background-color: #0d0909;
`;

const FooterWrap = styled.div`
  padding: 16px 24px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  width: 100%;
  max-width: 1300px;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items:center;
  margin-bottom: 16px;
  font-size: bold;

  &:hover {
    color: blue;
    transition: 0.2s;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  font-size: 24px;
  color: #fff;

  &:hover {
    color: red;
    transition: 0.2s;
  }
`;


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' 
                                            aria-label='Facebook' rel='noopener noreferrer' >
                                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' 
                                            aria-label='Instagram' rel='noopener noreferrer'>
                                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' 
                                            aria-label='Twitter' rel='noopener noreferrer'>
                                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' 
                                            aria-label='Linkedin' rel='noopener noreferrer'>
                                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialLogo to='/' >کافی شاپ هادی</SocialLogo>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
