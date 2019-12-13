import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  grid-gap: 20.4px;
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 300px;
    text-align: left;
    align-items: center;
    height: 100%;
  }
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 400px;
  }
`;
const TextWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    order: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray};
  height: 300px;
  width: 300px;
  border-radius: 10px;
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;

const AboutMeggaPage = () => (
  <ContentTemplate>
    <StyledWrapper>
      <ImageWrapper />
      <TextWrapper>
        Irure adipisicing pariatur consectetur velit qui voluptate duis do id
        incididunt ullamco. In ut sunt est dolore et mollit. Est duis sit duis
        amet adipisicing eiusmod cillum Lorem duis anim est consequat occaecat
        dolore. Velit irure sunt duis cillum incididunt sunt mollit consequat.
        Veniam cillum mollit non irure esse ipsum in fugiat aliqua aliqua
        occaecat. Dolor aute incididunt irure deserunt nisi et veniam laboris
        quis deserunt incididunt. Dolore nisi dolore ipsum aliqua fugiat
        consectetur in pariatur officia nisi pariatur in ipsum. Incididunt Lorem
        labore qui adipisicing eiusmod nostrud sit irure magna.
      </TextWrapper>
    </StyledWrapper>
  </ContentTemplate>
);

export default AboutMeggaPage;
