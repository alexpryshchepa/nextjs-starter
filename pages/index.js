import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from 'i18n';
import Home from 'client/pages/Home';

const HomePage = ({ currentLang }) => <Home currentLang={i18n.language || currentLang} />;

HomePage.getInitialProps = async ({ req }) => {
  const props = {
    namespacesRequired: ['about'],
  };

  if (req) {
    props.currentLang = req.language;
    return props;
  }

  props.currentLang = i18n.language;
  return props;
};

HomePage.propTypes = {
  currentLang: PropTypes.string.isRequired,
};

export default HomePage;
