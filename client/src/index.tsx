import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from './pages/error-page'
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Menu from './pages/Menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "browse",
        element: <Browse />
      },
      {
        path: "menu",
        element: <Menu />
      },
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
