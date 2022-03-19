import React from "react";
import styled from "styled-components";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <NavContainer>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Prothm-Alo" width="210" height="55" />
          </a>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: sticky;

  top: 0;
  z-index: 100;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: none;
  }
  .nav-header {
    display: flex;
    object-fit: contain;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    img {
      width: 210px;
      margin-left: 540px;
    }
  }

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      ${"" /* width:100%; */}
      grid-template-columns: auto;
      align-items: center;
    }
  }
`;

export default Navbar;
