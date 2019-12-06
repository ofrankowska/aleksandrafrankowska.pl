import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import Subheading from 'components/Subheading/Subheading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 48px;
`;
const ProjectDescription = ({
  title,
  idea,
  goal,
  technologies,
  demoURL,
  repositoryURL,
}) => {
  return (
    <StyledWrapper>
      <Heading withUnderline width="270px">
        {title}
      </Heading>
      <Subheading>the idea</Subheading>
      <Paragraph>{idea}</Paragraph>
      <Subheading>main goal</Subheading>
      <Paragraph>{goal}</Paragraph>
      <Subheading>used technologies</Subheading>
      <Paragraph>{technologies}</Paragraph>
      {title !== 'Portofolio' && (
        <a href={demoURL} target="_blank" rel="noopener noreferrer">
          <Button type="button" style={{ marginRight: '16px' }}>
            Live Demo
          </Button>
        </a>
      )}
      <a href={repositoryURL} target="_blank" rel="noopener noreferrer">
        <Button type="button">GitHub</Button>
      </a>
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
};

ProjectDescription.defaultProps = {
  demoURL: '',
};
export default ProjectDescription;
