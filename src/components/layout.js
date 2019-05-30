import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';
import $ from 'jquery';
if (typeof window !== `undefined`) {
  window.jQuery = $;
  window.$ = $;
}

import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr-CA';
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en-CA';

import '../pages/bootstrap.min.css';

import Header from '../components/Header';
import MainPage from './MainPage';
import Footer from './Footer';
import ToTop from './ToTop';

// add concatenated locale data
addLocaleData([...fr, ...en]);

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = this.props.data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));
  }
  render() {
    const {header, footer, ...mainData} = this.props.data;
    return (
      <IntlProvider
        locale={this.langKey}
      >
        <div>
          <Helmet
            title="Recovery Garment Center"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            
            <script src="/front-parts.js" type="text/javascript"></script>
            <script src="/interact-script.js" type="text/javascript"></script>
            <link rel="stylesheet" type="text/css" href="/illustration-style.css" />
          </Helmet>
          <Header currentLocation={this.props.location.pathname} languages={this.langsMenu} {...header}/>
          <MainPage currentLocation={this.props.location.pathname} data={mainData}/>
          <Footer data={footer}/>
          <ToTop />
        </div>
      </IntlProvider>
    );
  }
}

export default TemplateWrapper
