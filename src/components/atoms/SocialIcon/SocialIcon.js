import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 45px;
  ${({ theme }) => theme.textHover(theme.yellow)}
`;

const SocialIcon = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <StyledIcon icon={icon} />
  </a>
);

SocialIcon.propTypes = {
  icon: PropTypes.shape({ iconName: PropTypes.string }).isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialIcon;
