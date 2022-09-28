import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.2rem,;
    line-height: 1.3;
    background: #0D0D0B;
    color: #fff;
    overflow-x: hidden;
  }

  a {
    color: #fff;
    text-decoration: none!important;
  }

  
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`;

export const Heading = styled.h1`
  margin-bottom: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  &::before {
    content: "";
    background: #fff;
    width: 38px;
    height: 4px;
    display: block;
  }
`;

export default GlobalStyle;
