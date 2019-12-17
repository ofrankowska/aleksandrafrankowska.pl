import React from 'react';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import img from 'assets/images/woman-coding.svg';
import MainTemplate from '../templates/MainTemplate';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${`url(${img})`};
  background-repeat: no-repeat;
  background-size: auto;
  background-position: bottom right;
  ${({ theme }) => theme.mq.tablet} {
    background-size: unset;
  }
`;

const StyledHeader = styled.header`
  padding-top: 40px;
  padding-left: 20px;
  padding-bottom: 320px;
  width: 330px;
  ${({ theme }) => theme.mq.tablet} {
    padding-left: 75px;
    padding-top: 160px;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 800px;
    padding-bottom: 0;
    ${({ theme }) => theme.mq.huge} {
      width: 1000px;
    }
  }
`;
const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0 0 10px;
  line-height: 0.9;
  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

const HeadingWrapper = styled.div`
  display: none;
  h1:first-child {
    margin: -4px 0;
    padding-right: 10px;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

const IndexPage = () => (
  <MainTemplate>
    <StyledWrapper>
      <StyledHeader>
        <PageTitle bold>Frontend Developer</PageTitle>
        <HeadingWrapper>
          <Heading withUnderline>Aleksandra</Heading>
          <Heading withUnderline>Frankowska</Heading>
        </HeadingWrapper>
      </StyledHeader>
    </StyledWrapper>
  </MainTemplate>
);

export default IndexPage;
