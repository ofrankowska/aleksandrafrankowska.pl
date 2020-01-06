import React from 'react';
import ContentTemplate from 'templates/ContentTemplate';

// import SEO from '../components/seo';

const NotFoundPage = () => (
  // <SEO title="404: Not found" />
  <ContentTemplate>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </ContentTemplate>
);

export default NotFoundPage;
