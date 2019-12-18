import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
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
    /* justify-content: center; */
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

const AboutMeggaPage = () => {
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
          {/* My favorite thing about frontend development is that I am able to combine logical thinking with creativity. I have always enjoyed a ... challenge, tackling things that are hard  and been a design enthusiast.
          I love creating aesthetically pleasing and functional things. I
          enjoy a challenge. Something I cannot stand is a task done capable of
          quickly learning and delivering solutions as an individual as well ass
          a part of a team. Passionate about sustainability, self
          development/growth I am very self motivated and I am determined to
          learn, grow and provide a high quality of work */}
          Qui labore ea reprehenderit ut aliquip nostrud duis pariatur non et et
          id. Consequat reprehenderit in quis eu elit deserunt. Incididunt
          incididunt aute duis laboris ullamco eiusmod culpa velit cupidatat ad
          tempor enim et. Irure ea deserunt deserunt ex commodo nulla. Est
          voluptate sint ipsum amet nostrud officia reprehenderit veniam eu
          enim. Cupidatat esse officia id commodo velit dolore sint non aute
          quis ea ut do. Sint labore do commodo sint proident adipisicing est.
        </TextWrapper>
      </StyledWrapper>
    </ContentTemplate>
  );
};

export default AboutMeggaPage;
