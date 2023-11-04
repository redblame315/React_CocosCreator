import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import Router from './AppRouter';
import 'tailwindcss/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
