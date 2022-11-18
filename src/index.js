import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';

const basename =
  process.env.NODE_ENV !== 'production'
    ? '/goit-react-hw-06-phonebook'
    : '/goit-react-hw-06-phonebook/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename={basename}>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
</React.StrictMode>
 
);
