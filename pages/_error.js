import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'core/i18n';

class Error extends Component {
  static getInitialProps({ res, err }) {
    let statusCode = null;
    if (res) {
      ({ statusCode } = res);
    } else if (err) {
      ({ statusCode } = err);
    }

    return {
      namespacesRequired: ['common'],
      statusCode,
    };
  }

  static propTypes = {
    statusCode: PropTypes.number,
    t: PropTypes.func.isRequired,
  }

  static defaultProps = {
    statusCode: null,
  }

  render() {
    const { statusCode, t } = this.props;
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
      >
        <p>
          {statusCode
            ? t('error-with-status', { statusCode })
            : t('error-without-status')}
        </p>
      </div>
    );
  }
}

export default withNamespaces('common')(Error);
