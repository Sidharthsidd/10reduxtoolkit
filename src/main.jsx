import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
 import {Store} from "./Store/Store.js"
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>,
 
)
