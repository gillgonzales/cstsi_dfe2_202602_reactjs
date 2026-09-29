import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRoutes } from './routes/AppRoutes';
import { AppRoutesObjects } from './routes/AppRoutesObjects';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRoutes/> */}
    <AppRoutesObjects/>
  </StrictMode>
);
