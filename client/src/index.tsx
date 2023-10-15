import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/global.css'
import Store from './store/store';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({
  store
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Context.Provider value={{
        store
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </BrowserRouter>

);

reportWebVitals();
