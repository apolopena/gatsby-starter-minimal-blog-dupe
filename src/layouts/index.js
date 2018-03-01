import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Starter Minimal Blog"
      meta={[
        { name: 'description', content: 'Gatsby Starter Minimal Blog' },
        { name: 'keywords', content: 'Gatsby, Starter, Minimal, Blog' },
      ]}
    />
    <main className="layout">{children()}</main>
    <Footer />
  </div>
);

export default TemplateWrapper;
