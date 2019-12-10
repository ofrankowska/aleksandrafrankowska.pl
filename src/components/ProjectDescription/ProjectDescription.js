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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const MockupsWrapper = styled.div`
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 50%;
  height: 500px;
`;
const ButtonsWrapper = styled.div`
  margin-top: 0.48rem;
  button:first-child {
    margin-right: 1.6rem;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledPhoneSVG = styled(SVG)`
  transform: scale(0.5);
  position: relative;
  left: -10rem;
  bottom: -4rem;
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
    <StyledWrapper>
      <DescriptionWrapper>
        <Heading withUnderline>{title}</Heading>
        <Subheading>the idea</Subheading>
        <Paragraph>{idea}</Paragraph>
        <Subheading>main goal</Subheading>
        <Paragraph>{goal}</Paragraph>
        <Subheading>used technologies</Subheading>
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
      </DescriptionWrapper>
      <MockupsWrapper image={computerSVG}>
        <StyledPhoneSVG src={phoneSVG} />
      </MockupsWrapper>
    </StyledWrapper>
  );
};

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  idea: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  demoURL: PropTypes.string,
  repositoryURL: PropTypes.string.isRequired,
  phoneSVG: PropTypes.element.isRequired,
  computerSVG: PropTypes.element.isRequired,
};

ProjectDescription.defaultProps = {
  demoURL: '',
};
export default ProjectDescription;
