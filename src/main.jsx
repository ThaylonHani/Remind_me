import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import Error404 from './404';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404/>
  },
    ]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
