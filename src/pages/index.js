import React from 'react';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';
import img from 'assets/images/woman-coding.svg';
import MainTemplate from '../templates/MainTemplate';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: ${`url(${img})`};
  background-repeat: no-repeat;
  background-position: bottom right;
`;

const PageTitleWrapper = styled.div`
  padding-left: 75px;
`;
const PageTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 17vh 0 0;
`;

const IndexPage = () => (
  <MainTemplate>
    <StyledWrapper>
      <PageTitleWrapper>
        <PageTitle bold>Frontend Developer</PageTitle>
        <Heading withUnderline width="490px">
          Aleksandra Frankowska
        </Heading>
      </PageTitleWrapper>
    </StyledWrapper>
  </MainTemplate>
);

export default IndexPage;
