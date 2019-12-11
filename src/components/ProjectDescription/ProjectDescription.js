import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import Subheading from 'components/Subheading/Subheading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledWrapper = styled.div`
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: 1fr 430px;
  grid-gap: 2%;
`;

const MockupsWrapper = styled.div`
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  height: 450px;
`;
const ButtonsWrapper = styled.div`
  margin-top: 0.48rem;
  button:first-child {
    margin-right: 1.6rem;
  }
`;
const StyledPhoneSVG = styled(SVG)`
  transform: scale(0.45);
  position: relative;
  left: -10rem;
  bottom: 10%;
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
            {title !== 'Portofolio' && (
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
