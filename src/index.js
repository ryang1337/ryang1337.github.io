import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouteErrorPage from './RouteErrorPage.js'
import ProjectPage, { loader as projectPageLoader } from './ProjectPage.js'
import ProjectTagPage, { loader as projectTagPageLoader } from './ProjectTagPage.js'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <RouteErrorPage/>
  },{
    path: "/projects/:projectTitle",
    element: <ProjectPage />,
    loader: projectPageLoader
  },{
    path: "/projects",
    element: <ProjectTagPage />,
    loader: projectTagPageLoader
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
