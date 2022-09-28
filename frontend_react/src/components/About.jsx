import React, { useState, useEffect, useRef } from "react";
import ProfilePic from "../images/profilepic1.png";
import styled from "styled-components";
import { accordionData } from "../data/accordionData";
import { Heading } from "../globalStyles";
import { Link } from "react-router-dom";

// import sanityClient from '../client.js'
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

import { urlFor, client } from "../client.js";

function About() {
  const [selected, setSelected] = useState(null);
  const refs = useRef(accordionData.map(() => React.createRef()));
  const [aboutData, setAboutData] = useState(null);

  const toggleAccordion = (index) => {
    let content = refs.current;
    setSelected(index);

    if (selected === index) {
      content[index].current.nextElementSibling.style.maxHeight = null;
      //set selected to null to toggle open close of accordion
      setSelected(null);
    } else {
      content[index].current.nextElementSibling.style.maxHeight =
        content[index].current.scrollHeight + "px";
    }
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"]{
        aboutImg,
        accordion[]{
          ...,
          "pdfURL": pdfFile.asset->url
        }
      }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <AboutSection id="about">
        <AboutContainer>
          <Heading>About</Heading>
          {aboutData &&
            aboutData.map((item, index) => {
              return (
                <AboutMain key={index}>
                  <AboutImg>
                    <img src={urlFor(item.aboutImg)} alt="profile-pic" />
                  </AboutImg>

                  <AboutInfo>
                    {item.accordion.map((item, index) => {
                      return (
                        <div key={index}>
                          <Accordion
                            onClick={() => toggleAccordion(index)}
                            ref={refs.current[index]}
                          >
                            {item.title ? item.title : ""}
                            {item.titleLink ? item.titleLink : ""}
                          </Accordion>
                          <AccordionContent>
                            {/* either plain content or content with link */}
                            {item.title ? <p>{item.content}</p> : ""}
                            {item.titleLink ? (
                              <p>
                                {item.text}{" "}
                                <a
                                  href={item.pdfURL}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.urlText}
                                </a>{" "}
                              </p>
                            ) : (
                              ""
                            )}
                            {/* end----*/}
                          </AccordionContent>
                        </div>
                      );
                    })}
                  </AboutInfo>
                </AboutMain>
              );
            })}
        </AboutContainer>
      </AboutSection>
    </div>
  );
}

export default About;

const AboutSection = styled.div`
  padding-top: 5rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 1160px) {
    margin-bottom: 0;
    min-height: 60vh;
  }
  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
`;

const AboutContainer = styled.div`
  padding: 0 50px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  max-width: 1600px;
  @media screen and (max-width: 1160px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AboutMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImg = styled.div`
  width: 400px;
  height: 400px;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media screen and (max-width: 1160px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
    margin-bottom: 80px;
  }
`;

const AboutInfo = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Accordion = styled.button`
  width: 100%;
  height: 50px;
  text-align: left;
  background: #0d0d0b;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 400;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  /* initially removes the padding of content  */
  margin: 20px 0;

  border-bottom: 2px solid #fff;
  margin-bottom: 2rem;
  /* initially removes the height of content  */
  max-height: 0;
  overflow: hidden;

  /* Animation when opening accordion */
  transition: max-height 0.2s ease-in-out;

  p {
    line-height: 1.6;
    font-weight: 300;

    a {
      font-weight: 700;
    }
  }

  /* p:last-child {
    margin-bottom: 30px !important;
  } */
`;
