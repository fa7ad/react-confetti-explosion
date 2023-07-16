import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './example.tsx';
import './example.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
);
