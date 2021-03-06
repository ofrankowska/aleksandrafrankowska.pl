import React from 'react';
import styled from 'styled-components';
import SocialIcon from 'components/atoms/SocialIcon/SocialIcon';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  width: 105px;
`;
const SocialIcons = () => (
  <IconWrapper>
    <SocialIcon url="https://github.com/ofrankowska/" icon={faGithubSquare} />
    <SocialIcon url="https://linkedin.com/in/ofrankowska" icon={faLinkedin} />
  </IconWrapper>
);
export default SocialIcons;
