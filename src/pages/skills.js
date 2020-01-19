import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import styled from 'styled-components';

const skills = [
  ['HTML', 'CSS', 'JavaScript', 'SASS', 'Responsive Design', 'Bootstrap'],
  ['React', 'Styled Components', 'Gatsby', 'Material UI'],
  ['GIT', 'GitHub', 'Visual Studio Code', 'Chrome/React DevTools', 'Wordpress'],
  ['MySQL', 'Figma', 'GIMP', 'VEGAS Pro'],
];

const StyledWrapper = styled.div`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  ${({ theme }) => theme.mq.tablet} {
    justify-content: space-between;
  }
`;

const InnerWrapper = styled.div`
  flex-basis: 220px;
  padding: 16px;
  border-color: ${({ theme }) => theme.blue};
  border-bottom: solid 3px;
  border-top: solid 3px;
  margin-bottom: -3px;
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    height: 397.2px;
    margin: 16px;
  }
`;
const SkillsPage = () => (
  <ContentTemplate>
    <StyledWrapper>
      {skills.map(list => (
        <InnerWrapper key={list}>
          {list.map(item => (
            <p key={item}>{item}</p>
          ))}
        </InnerWrapper>
      ))}
    </StyledWrapper>
  </ContentTemplate>
);

export default SkillsPage;
