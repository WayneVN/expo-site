import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@expo/styleguide';
import App from './App.tsx'
import './styles/reset.css'
import './styles/globals.css'

import '@expo/styleguide/dist/expo-theme.css';
import '@expo/styleguide-search-ui/dist/expo-search-ui.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
