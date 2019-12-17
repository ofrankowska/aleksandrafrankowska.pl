import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 45px;
  ${({ theme }) => theme.textHover(theme.yellow)}
`;

const SocialIcons = () => (
  <IconWrapper>
    <a
      href="https://github.com/ofrankowska/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledIcon icon={faGithubSquare} />
    </a>
    <a
      href="https://www.linkedin.com/in/aleksandra-frankowska-52603518a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledIcon icon={faLinkedin} />
    </a>
  </IconWrapper>
);
export default SocialIcons;
