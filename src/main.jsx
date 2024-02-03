import React from 'react'
import ReactDOM from 'react-dom/client'
import Report from './pages/Report.jsx'
import theme from './themes/theme.jsx'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Report />
    </ThemeProvider>
  </React.StrictMode>,
);