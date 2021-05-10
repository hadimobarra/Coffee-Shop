import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: rgba(152, 223, 38, 0.99);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-in-out;
  right: ${ ({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
      width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #000;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  align-items: center;

  @media screen and (max-width: 480px) {
      grid-template-rows: repeat(3, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
      color: #e31837;
      transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRouter = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  border-radius: 40px;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: 0.2s ease-in-out;
      background: ##fff;
      color: #010606;
  }
`;



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>خانه</SidebarLink>
                <SidebarLink to='/'>درباره ما</SidebarLink>
                <SidebarLink to='/'>رزرو</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to='/'>سفارش</SidebarRouter>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
