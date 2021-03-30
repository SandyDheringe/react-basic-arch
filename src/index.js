import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <Router>
    <I18nextProvider>
      <App />
    </I18nextProvider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
