import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroImage from "../images/hero.jpg";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { urlFor, client } from "../client.js";

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "hero"]{
        heroImg,
        primary,
        secondary,
        tertiary,
        ctaBtnLink,
        ctaBtn,
        heroSocials[]{
          ...
        }
      }`
      )
      .then((data) => setHeroData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {heroData &&
        heroData.map((item, index) => {
          return (
            <HeroSection key={index} id="hero">
              <img src={urlFor(item.heroImg)} alt="hero" className="hero-img" />
              <HeroContainer>
                <HeroMain>
                  <h1>{item.primary}</h1>
                  <h3>{item.secondary}</h3>
                  <p>{item.tertiary}</p>
                  <LinkScroll
                    to={item.ctaBtnLink}
                    smooth={true}
                    duration={200}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ cursor: "pointer" }}
                  >
                    {item.ctaBtn}
                  </LinkScroll>
                </HeroMain>
                <HeroSocials>
                  {item.heroSocials.map((item, index) => {
                    return (
                      <HeroSocial key={index}>
                        <a
                          href={item.urlField}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={index}
                        >
                          <img src={urlFor(item.socialImage)} alt="social" />
                        </a>
                      </HeroSocial>
                    );
                  })}
                </HeroSocials>
              </HeroContainer>
            </HeroSection>
          );
        })}
    </>
  );
}

export default Hero;

const HeroSection = styled.section`
  min-height: 100vh;
  /* background: url(${HeroImage}) center/cover no-repeat; */

  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: black;
    opacity: 0.2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .hero-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8rem;
  max-width: 1600px;
  z-index: 20;
`;

const HeroMain = styled.div`
  position: relative;
  width: 60%;
  padding-bottom: 6rem;
  padding-top: 10rem;
  h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    font-family: "Playfair Display", serif;
    font-weight: normal;
    text-transform: capitalize;
  }
  h3 {
    font-size: 2rem; //48px
    font-weight: 400;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }
  a {
    font-family: "Playfair Display", serif;
    border: 1px solid #fff;
    padding: 1rem 4rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    position: relative;
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    padding-top: 2rem;
  }
`;

const HeroSocials = styled.div`
  position: relative;
  display: flex;
  margin-top: 4rem;
  a {
    margin-right: 1rem;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const HeroSocial = styled.div``;
