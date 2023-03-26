import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCartContext from './context/ShoppingCartContext';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartContext>
        <Provider store={store}>
          <App />
        </Provider>
      </ShoppingCartContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
