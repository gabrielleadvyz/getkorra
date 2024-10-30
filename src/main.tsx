import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Remove the index.css import if you're not using it
// If you need it, make sure the file exists

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
