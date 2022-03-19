import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy;
        <span> Prothm-Alo </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: '#F7F7F7';
  text-align: center;
  span {
    color: '#541212';
  }
  h5 {
    color: '#2C3333');
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
