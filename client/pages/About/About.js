import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNamespaces, Link } from 'i18n';
import Loader from 'client/components/Loader';
import s from './About.scss';

export const About = ({ t, docs }) => {
  const renderDocs = () => {
    if (docs.isLoaded) {
      return <div dangerouslySetInnerHTML={{ __html: docs.data }} />;
    } if (docs.hasError) {
      return <span className={s.error}>{t('error')}</span>;
    }

    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  };

  return (
    <div className={s.root}>
      <Link prefetch href="/">
        <a className={s.link}>{t('link')}</a>
      </Link>
      <h1 className={s.title}>{t('title')}</h1>
      <div className={s.docs}>
        {renderDocs()}
      </div>
    </div>
  );
};

About.propTypes = {
  t: PropTypes.func.isRequired,
  docs: PropTypes.shape({
    isLoaded: PropTypes.bool,
    hasError: PropTypes.bool,
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(null),
    ]),
  }).isRequired,
};

export default compose(
  connect(state => ({
    docs: state.docs,
  })),
  withNamespaces('about'),
)(About);
