import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import Heading from 'components/Heading/Heading';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const PageTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 17vh 0 0;
`;

const IndexPage = () => (
  <ContentTemplate>
    <StyledWrapper>
      <PageTitle bold>Frontend Developer</PageTitle>
      <Heading withUnderline width="490px">
        Aleksandra Frankowska
      </Heading>
    </StyledWrapper>
  </ContentTemplate>
);

export default IndexPage;
