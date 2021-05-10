import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import {IoLogoInstagram} from 'react-icons/io';
import {GrFacebookOption} from 'react-icons/gr';
import {FaTelegramPlane} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import {ImYoutube} from 'react-icons/im';
import { NavData } from '../../Data/NavData';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.div`
  transform: translate(-35%, 0);
`;

const Links = styled(Link)``;

const NavInfo = styled.div`
  display: flex;
  transform: translate(23%, 0);
`;

const Info = styled.div`
  display: flex;
  margin-right: 14px;
  padding: 4px 0;
`;

const iconStyles = css`
  font-size: 1.3rem;
  margin: 4px 8px;
  color: brown;
  
  &:hover {
      cursor: pointer;
      transition: 0.2s;
      color: blue;
  }
`;

const infoStyles = css`
  font-size: 1rem;
  margin: 0 6px;
  color: brown;

  &:hover {
      cursor: pointer;
      transition: 0.2s;
      color: blue;
  }
`;


const Instagram = styled(IoLogoInstagram)`
${iconStyles};
`;

const FaceBook = styled(GrFacebookOption)`
${iconStyles};
`;

const Telegram = styled(FaTelegramPlane)`
${iconStyles};
`;

const Twitter = styled(IoLogoTwitter)`
${iconStyles};
`;

const YouTube = styled(ImYoutube)`
${iconStyles};
`;

const BarOne = styled(IoIosCall)`
${infoStyles};
`;

const BarTwo = styled(HiLocationMarker)`
${infoStyles};
`;


const Navbar = () => {
    return (
        <Nav>
            <NavLink>
                <Links>
                  <Instagram />
                  <FaceBook />
                  <Telegram />
                  <Twitter />
                  <YouTube />
                </Links>
            </NavLink>
            <NavInfo>
                <Info>
                    <div>{NavData.phone}</div>
                    <BarOne />
                </Info>
                <Info>
                    <address>{NavData.address}</address>
                    <BarTwo />
                </Info>

            </NavInfo>
        </Nav>
    )
}

export default Navbar;
