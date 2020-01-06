import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Subheading from 'components/atoms/Subheading/Subheading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 48px;
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-gap: 4%;
  }
`;

const ButtonsWrapper = styled.div`
  margin: 4.8px 0;
  button:first-child {
    margin-right: 1.6rem;
  }
`;
const MockupsWrapper = styled.div`
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 20.8px;
  height: 225px;
  margin: 15px 0 80px;
  width: 300px;
  ${({ theme }) => theme.mq.tablet} {
    height: 300px;
    width: 400px;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 450px;
    margin: 0;
  }
`;

const StyledPhoneSVG = styled(SVG)`
  position: absolute;
  transform: scale(0.35);
  left: -150px;
  bottom: -300px;
  ${({ theme }) => theme.mq.tablet} {
    transform: scale(0.4);
    left: -145px;
    bottom: -260px;
  }
  ${({ theme }) => theme.mq.desktop} {
    transform: scale(0.45);
    left: -140px;
    bottom: -160px;
  }
`;
const ProjectDescription = ({
  title,
  idea,
  goal,
  technologies,
  demoURL,
  repositoryURL,
  phoneSVG,
  computerSVG,
}) => {
  return (
    <div>
      <Heading withUnderline>{title}</Heading>
      <StyledWrapper>
        <div>
          <Subheading>the idea</Subheading>
          <Paragraph>{idea}</Paragraph>
          <Subheading>main goal</Subheading>
          <Paragraph>{goal}</Paragraph>
          <Subheading>built using</Subheading>
          <Paragraph>{technologies}</Paragraph>
          <ButtonsWrapper>
            {title !== 'Portfolio' && (
              <a href={demoURL} target="_blank" rel="noopener noreferrer">
                <Button type="button">Live Demo</Button>
              </a>
            )}
            <a href={repositoryURL} target="_blank" rel="noopener noreferrer">
              <Button type="button">GitHub</Button>
            </a>
          </ButtonsWrapper>
        </div>
        <MockupsWrapper image={computerSVG}>
          <StyledPhoneSVG src={phoneSVG} />
        </MockupsWrapper>
      </StyledWrapper>
    </div>
  );
};

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  demoURL: PropTypes.string,
  repositoryURL: PropTypes.string.isRequired,
  phoneSVG: PropTypes.string.isRequired,
  computerSVG: PropTypes.string.isRequired,
};

ProjectDescription.defaultProps = {
  demoURL: '',
};
export default ProjectDescription;
