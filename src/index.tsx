import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="trivia" element={<App/>}>
              <Route index element={<Dashboard/>} />
              <Route path=":id" element={<Dashboard/>} />
            </Route>
            <Route path="/" element={<Navigate to="trivia"/>} />
            <Route path="summary" element={<Summary/>} />
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
