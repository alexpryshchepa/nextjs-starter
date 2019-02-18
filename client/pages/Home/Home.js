import React from 'react';
import PropTypes from 'prop-types';
import {
  config, i18n, withNamespaces, Link,
} from 'i18n';
import s from './Home.scss';

export const Home = ({ t }) => (
  <div className={s.root}>
    <img className={s.img} src="/static/img/nextjs.png" alt="Tech Stack" />
    <h1 className={s.title}>{t('title')}</h1>
    <Link prefetch href="/about">
      <a className={s.link}>{t('link')}</a>
    </Link>
    <p className={s.text}>{t('text')}</p>
    <ul className={s.langs}>
      {[config.defaultLanguage, ...config.otherLanguages].map((lang) => {
        const text = lang.substr(0, 1).toUpperCase() + lang.substr(1, lang.length - 1);

        return (
          <li key={lang}>
            <button
              // Issue with current lang during SSR https://github.com/isaachinman/next-i18next/issues/187
              className={i18n.language === lang ? s.langActive : s.lang}
              type="button"
              onClick={() => i18n.changeLanguage(lang)}
            >
              {text}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces('common')(Home);
