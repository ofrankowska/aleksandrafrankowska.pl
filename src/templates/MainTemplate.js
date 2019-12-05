import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar/Sidebar';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
