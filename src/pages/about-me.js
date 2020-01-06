import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import Subheading from 'components/atoms/Subheading/Subheading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  grid-gap: 20.4px;
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 310px;
    text-align: left;
    align-items: center;
    height: 100%;
  }
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 350px;
  }
`;
const TextWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    order: -1;
    display: flex;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray};
  overflow: hidden;
  height: 310px;
  width: 310px;
  border-radius: 10px;
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 350px;
  }
`;

const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "portrait.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <ContentTemplate>
      <StyledWrapper>
        <ImageWrapper>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="Picture of Aleksandra Frankowska"
            imgStyle={{
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        </ImageWrapper>
        <TextWrapper>
          {/* My dream is to take part in projects that improve lives of those around me. My favorite thing about frontend development is that I am able to combine logical thinking with creativity. I have always enjoyed a ... challenge, tackling things that are hard  and been a design enthusiast.
          I love creating aesthetically pleasing and functional things. I
          enjoy a challenge. Something I cannot stand is a task done capable of
          quickly learning and delivering solutions as an individual as well ass
          a part of a team. Passionate about sustainability, self
          development/growth 
          
          I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          I prefer to keep learning, continue challenging myself, and do interesting things that matter. 
          
          I have always enjoyed creating things
          I enjoy developing my skills and passions.
            Bringing ideas to life in the browrser using code is exciting to me. 
          As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. 
          the endless possibilities that code brings
          */}
          {/* <Heading>
            I want to make things that
            <Heading withUnderline>make a difference.</Heading>
          </Heading> */}
          <Subheading>Hello,</Subheading>
          <Paragraph>
            my name is Ola. I am a graduate of Informatics and Econometrics,
            currently looking for a Frontend Developmnet job.
          </Paragraph>
          <Paragraph>
            I was driven to Frontend Development by my passion for creating
            things. I find bringing ideas to life in the browser very exciting.
            I have dedicated the last few months to furthering my skills and
            exploring the endless possibilities that code brings.
          </Paragraph>
          <Paragraph>
            I am naturally curious and perpetually working on improving my
            chops. I am determined to learn, grow and provide a high quality of
            work as an individual as well as a part of a team.
          </Paragraph>
        </TextWrapper>
      </StyledWrapper>
    </ContentTemplate>
  );
};

export default AboutMePage;
