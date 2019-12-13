import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.blue};
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  ${({ theme }) => theme.mq.desktop} {
    padding-left: 75px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.medium};
  margin-bottom: auto;
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  opacity: 0.6;
  font-weight: ${({ theme }) => theme.medium};
  margin: 0;
`;

const Footer = () => (
  <StyledWrapper>
    <Heading bold>get in touch</Heading>
    <StyledLink href="mailto:olafrankowska112@gmail.com">
      olafrankowska112@gmail.com
    </StyledLink>
    <StyledParagraph>
      @ 2019 Aleksandra Frankowska. All rights reserved
    </StyledParagraph>
  </StyledWrapper>
);
export default Footer;
