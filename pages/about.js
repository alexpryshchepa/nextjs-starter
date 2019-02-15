import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchDocs from 'client/actions/docs';
import About from 'client/pages/About';

class AboutPage extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['about'],
    };
  }

  static propTypes = {
    isDocs: PropTypes.bool.isRequired,
    fetchDocsAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { isDocs, fetchDocsAction } = this.props;

    if (!isDocs) {
      fetchDocsAction();
    }
  }

  render() {
    return <About />;
  }
}

const mapState = state => ({
  isDocs: state.docs.loaded,
});

const mapDispatch = {
  fetchDocsAction: fetchDocs,
};

export default connect(mapState, mapDispatch)(AboutPage);
