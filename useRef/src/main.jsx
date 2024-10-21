import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Exercise2 from './Exercise2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Exercise2 />
  </StrictMode>,
)
