import React from 'react'
import styled from "styled-components";
import logo from '../assets/logo1.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
        <div className="nav-center">
            <div className="nav-header">
            <Link to="/">
            <img src={logo} alt="Prothm-Alo" />
          </Link>
            </div>
        </div>
    </NavContainer>
  );
};


const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#F5F5F5;
    position: sticky;
    align-items: center;
    top:0;
    z-index: 100;
  

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    
  }
  .nav-header {
    display: flex;
    object-fit: contain;
    cursor:pointer;
    img {
      width: 175px;
      margin-left: 540px;
    }
  }
 
  @media (min-width: 576px) {
   
  
  }
`;


export default Navbar