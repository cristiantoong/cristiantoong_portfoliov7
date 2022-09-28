import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { urlFor, client } from "../client.js";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  //scroll to top
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footer"]{
        logo,
        footerSocials[]{
          ...
        }
      }`
      )
      .then((data) => setFooterData(data))
      .catch(console.error);
  }, []);
  return (
    <FooterContainer id="footer">
      {footerData &&
        footerData.map((item, index) => {
          return (
            <FooterMain key={index}>
              <FooterLogo onClick={toggleHome}>
                <Link to="/">
                  <img src={urlFor(item.logo)} alt="logo" />
                </Link>
              </FooterLogo>
              <FooterCopyright>
                © <span id="current-year">{new Date().getFullYear()}</span>,
                Cristian To-ong
              </FooterCopyright>

              <FooterSocials>
                {item.footerSocials.map((item, index) => {
                  return (
                    <a
                      href={item.urlField}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={urlFor(item.socialImage)} alt="social" />
                    </a>
                  );
                })}
              </FooterSocials>
            </FooterMain>
          );
        })}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 3rem 4rem;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;
const FooterLogo = styled.div`
  width: 42px;
  height: 42px;
  align-self: center;
  font-size: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const FooterCopyright = styled.div`
  font-size: 1rem;
`;

const FooterSocials = styled.div`
  position: relative;
  /* margin-top: 4rem; */
  a {
    margin-right: 1rem;

    img {
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 580px) {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media screen and (max-width: 580px) {
    margin-top: 0;
  }
`;
