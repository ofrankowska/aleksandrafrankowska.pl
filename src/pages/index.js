import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

const IndexPage = () => (
  <ContentTemplate>
    <div>
      <Heading bold>Heading</Heading>
      <Heading withUnderline>Heading</Heading>
      <Button type="button">Button</Button>
      <Paragraph>
        Veniam in proident do do irure do proident ullamco commodo. Incididunt
        dolor pariatur ex commodo reprehenderit magna sit aliquip adipisicing
        veniam id. Laborum enim reprehenderit aute et minim excepteur sit sit
        tempor tempor ullamco non cillum. Voluptate elit ad ullamco exercitation
        amet minim sunt pariatur consequat labore officia id tempor. Culpa velit
        nostrud nostrud id duis proident esse culpa cillum incididunt
        consectetur.
      </Paragraph>
      <Paragraph big>big</Paragraph>
    </div>
  </ContentTemplate>
);

export default IndexPage;
