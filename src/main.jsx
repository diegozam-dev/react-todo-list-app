import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TodoListContextProvider } from './context/TodoListContext.jsx';
import './main.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>
);
