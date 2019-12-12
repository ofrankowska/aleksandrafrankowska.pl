import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import SEO from 'components/seo';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import GlobalStyle from 'assets/styles/GlobalStyle';

import { theme } from 'assets/styles/theme';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 93.2px);
  display: grid;
  grid-template-rows: 1fr 165px;
  ${theme.mq.desktop} {
    min-height: 100vh;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      <Header />
      <Sidebar />
      <StyledWrapper>
        {children}
        <Footer />
      </StyledWrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainTemplate;
