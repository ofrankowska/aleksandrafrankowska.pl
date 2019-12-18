import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import styled from 'styled-components';

const skills = [
  ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL'],
  ['Responsive Design', 'Styled Components', 'Bootstrap', 'Material UI'],
  ['GIT', 'GitHub', 'VSCode', 'Chrome/React DevTools', 'Gatsby', 'Wordpress'],
  ['Figma', 'GIMP', 'VEGAS Pro'],
];

const StyledWrapper = styled.div`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  flex-basis: 100%;
  /* text-align: center; */
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
    /* border: solid 3px; */
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
