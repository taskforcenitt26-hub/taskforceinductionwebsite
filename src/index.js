// Entry point – Taskforce Website NITT
import process from 'process';
window.process = process; // expose Node-style process for env vars (Supabase client)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // global styles / Tailwind build

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);