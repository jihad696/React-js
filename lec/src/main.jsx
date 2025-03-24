import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // css for full project
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  {/* StrictMode is a tool for highlighting potential problems in an application. Like Fragment,
   StrictMode does not render any extra DOM elements. It only activates checks and adds warnings in the console. */}
    <App />
  </StrictMode>
)
