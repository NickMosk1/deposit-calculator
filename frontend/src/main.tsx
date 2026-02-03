import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';
import { StoreProvider } from '@/stores';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </StrictMode>,
);
