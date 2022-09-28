import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Heading } from "../globalStyles";

import { urlFor, client } from "../client.js";

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const query = "";
    client
      .fetch(
        `*[_type == "projects"]{
        cardImg,
        overlayMockImg,
        overlayInfoTitle,
        skillset[]{
          ...,
        },
        buttons[]{
          ...
        }
      }`
      )
      .then((data) => setProjectsData(data))
      .catch(console.error);
  }, []);
  console.log(projectsData);
  return (
    <div>
      <ProjectsSection id="projects">
        <ProjectContainer>
          <Heading>Projects</Heading>

          <ProjectCards>
            {projectsData &&
              projectsData.map((item, index) => {
                return (
                  <ProjectCard key={index}>
                    <img src={urlFor(item.cardImg)} alt="project-img" />
                    <Overlay>
                      <InnerOverlay>
                        <OverlayMockupImg>
                          <img
                            src={urlFor(item.overlayMockImg)}
                            alt={item.overlayInfoTitle}
                          />
                        </OverlayMockupImg>
                        <OverlayInfo>
                          <h2>{item.overlayInfoTitle}</h2>
                          <SkillSet>
                            <h4>Skillset:</h4>
                            {item.skillset.map((item, index) => {
                              return <p key={index}>{item.skill}</p>;
                            })}
                          </SkillSet>
                          {item.buttons.map((item, index) => {
                            return (
                              <a
                                key={index}
                                href={item.btnLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.btnLabel}
                              </a>
                            );
                          })}
                        </OverlayInfo>
                      </InnerOverlay>
                    </Overlay>
                  </ProjectCard>
                );
              })}
          </ProjectCards>
        </ProjectContainer>
      </ProjectsSection>
    </div>
  );
};

export default Projects;

const ProjectsSection = styled.div`
  min-height: 100vh;
  padding: 6rem 0;
  margin-bottom: 5rem;
`;
const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 4rem;
`;

const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: 438px;
  grid-gap: 6rem;
`;
const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
`;

const ProjectCard = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const InnerOverlay = styled.div`
  display: flex;
`;
const OverlayMockupImg = styled.div`
  width: 50%;
  img {
    width: 100%;
    object-fit: scale-down;
  }
`;
const OverlayInfo = styled.div`
  width: 50%;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  a {
    font-size: 1rem;
    background: #0d0d0b;
    padding: 1rem 2rem;
    margin-right: 1rem;
  }
`;

const SkillSet = styled.div`
  margin-bottom: 3rem;

  h4 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;
