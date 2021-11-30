import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import { useAppDispatch } from './store/hooks';
import { fetchTriviaQuestions } from './store/triviaSlice';

const AppWithRouting: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTriviaQuestions());
	}, [dispatch]);
  return (
      <BrowserRouter>
      <Routes>
        <Route path="trivia" element={<App/>}>
          <Route index element={<Dashboard/>} />
          <Route path=":id" element={<Dashboard/>} />
        </Route>
        <Route path="/" element={<Navigate to="trivia/1"/>} />
        <Route path="summary" element={<Summary/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <AppWithRouting/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
