import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/components/App'
import './assets/styles/index.css'
import './i18n'
import { LocalizationProvider } from './localization'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider>
    <App />
    </LocalizationProvider>
  </React.StrictMode>,
)
