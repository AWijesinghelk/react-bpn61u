import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './component/Card';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Card/>
  </StrictMode>
);
