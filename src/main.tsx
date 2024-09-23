import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Context from './context/ContexProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
)
