import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import fetchDocs from 'actions/docs';
import { withNamespaces, Link } from 'core/i18n';
import Loader from 'components/Loader';
import s from './about.scss';

class About extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['about'],
    };
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    fetchDocsAction: PropTypes.func.isRequired,
    docs: PropTypes.shape({
      loaded: PropTypes.bool,
      error: PropTypes.bool,
      data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(null),
      ]),
    }).isRequired,
  };

  componentDidMount() {
    const { docs, fetchDocsAction } = this.props;

    if (!docs.loaded) {
      fetchDocsAction();
    }
  }

  renderDocs = () => {
    const { t, docs } = this.props;

    if (docs.loaded) {
      return <div dangerouslySetInnerHTML={{ __html: docs.data }} />;
    } if (docs.error) {
      return <span className={s.error}>{t('error')}</span>;
    }
    return <Loader />;
  }

  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <Link prefetch href="/">
          <a className={s.link}>{t('link')}</a>
        </Link>
        <h1 className={s.title}>{t('title')}</h1>
        <div className={s.docs}>
          {this.renderDocs()}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  docs: state.docs,
});

const mapDispatch = {
  fetchDocsAction: fetchDocs,
};

export default compose(
  connect(mapState, mapDispatch),
  withNamespaces('about'),
)(About);
