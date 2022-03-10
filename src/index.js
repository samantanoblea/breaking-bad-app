import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider} from 'react-i18next';
import App from './App';
import i18next from 'i18next';
import global_es from './services/translations/es/global.json';
import global_en from './services/translations/en/global.json';
import './styles/index.scss';


i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n ={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
