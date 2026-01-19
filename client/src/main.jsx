import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import App from './App.jsx';
import router from './routers/router.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
