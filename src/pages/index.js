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

const PageTitleWrapper = styled.div`
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
  }
`;
const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0;
  line-height: 6rem;
`;

const HeadingWrapper = styled.div`
  display: none;
  h1:first-child {
    margin: 0;
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
      <PageTitleWrapper>
        <PageTitle bold>Frontend Developer</PageTitle>
        <HeadingWrapper>
          <Heading withUnderline>Aleksandra</Heading>
          <Heading withUnderline>Frankowska</Heading>
        </HeadingWrapper>
      </PageTitleWrapper>
    </StyledWrapper>
  </MainTemplate>
);

export default IndexPage;
