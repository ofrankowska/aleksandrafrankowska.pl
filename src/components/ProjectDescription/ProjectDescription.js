import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import Subheading from 'components/Subheading/Subheading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 48px;
    display: grid;
    grid-template-columns: 1fr 430px;
    grid-gap: 2%;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 0.48rem;
  button:first-child {
    margin-right: 1.6rem;
  }
`;
const MockupsWrapper = styled.div`
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 230px;
  margin: 50px 0 80px;
  width: 300px;
  ${({ theme }) => theme.mq.tablet} {
    height: 320px;
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
    bottom: -190px;
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
