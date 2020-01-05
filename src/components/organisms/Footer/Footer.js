import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Navigation from 'components/molecules/Navigation/Navigation';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.blue};
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  ${({ theme }) => theme.mq.tablet} {
    padding-left: 75px;
  }
  ${({ theme }) => theme.mq.desktop} {
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.blue};
  }
`;

const StyledEmail = styled.a`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.medium};
  margin-bottom: 0;
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.blue};
    margin-bottom: auto;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  opacity: 0.6;
  font-weight: ${({ theme }) => theme.medium};
  margin: 0;
`;
const MobileContentWrapper = styled.div`
  padding: 16px 0;
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  ${({ theme }) => theme.textHover(theme.yellow)};
  &p {
    margin: 16px 0;
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
  }
`;

const Footer = () => (
  <StyledWrapper>
    <Heading bold>get in touch</Heading>
    <StyledEmail href="mailto:aleksandrafrankowska@hotmail.com">
      aleksandrafrankowska@hotmail.com
    </StyledEmail>
    <MobileContentWrapper>
      <StyledLink
        href="https://github.com/ofrankowska/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>github</p>
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/aleksandra-frankowska-52603518a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>linkedin</p>
      </StyledLink>
      <Navigation footer />
    </MobileContentWrapper>
    <StyledParagraph>
      @ 2020 Aleksandra Frankowska. All rights reserved
    </StyledParagraph>
  </StyledWrapper>
);
export default Footer;
