import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings/Settings.js';
import { MantineProvider } from '@mantine/styles';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     <MantineProvider withGlobalStyles withNormalizeCSS>
    <SettingsProvider>
      <App />
    </SettingsProvider>
     </MantineProvider>
  </React.StrictMode>
);
