import React, {useState} from 'react';
import styled from 'styled-components';
import {NavDataTwo} from '../../Data/NavData';
import coffee from '../../assets/images/coffee.png';
import {IoIosSearch} from 'react-icons/io';
import {BiChevronDown} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';


const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuBars = styled(FaBars)`
  display: none;
  
  &:hover {
    cursor: pointer;
  }
  
  @media screen and (max-width: 768px) {
      display: block;
  }
`;


const NavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
      height: 70px;
      width: 60px;
  }
`;

const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  font-size: 1rem;
  margin-right: 15px;
  color: gray;
  text-decoration: none;

  &:hover {
      cursor: pointer;
      color: #0001da;
      transition: 0.2s;
  }
`;

const Search = styled(IoIosSearch)`
  font-size: 1.1rem;
  transform: translate(70%, 35%);
`;

const Down = styled(BiChevronDown)`
  transform: translate( -10%, 25%);
`;

const NavbarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
    return (
            <NavContainer>
                <NavLink>
                    <img src={coffee} to='/home' alt='coffee'/>
                </NavLink>
                <MenuBars onClick={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <NavMenu to='/'>
                   {NavDataTwo.map((item, index) => {
                        return (
                            <NavItem key={index} to={item.path}>
                                {item.name}
                                {(item.sign) ? <Down /> : '' }
                            </NavItem>
                        );
                   })}
                   <Search />
                </NavMenu>
            </NavContainer>
    )
}

export default NavbarTwo;
