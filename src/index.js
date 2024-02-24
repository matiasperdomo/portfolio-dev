import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';

import constants_es from "./data/constants_es.js";
import constants_en from "./data/constants_en.js";

i18next.init({
  interpolation: { escapeValue:false},
  lng: "es",
  resources:{
    es: {
      constants : constants_es,
    },
    en: {
      constants : constants_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

