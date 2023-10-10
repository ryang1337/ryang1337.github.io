import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RouteErrorPage from './RouteErrorPage.js'
import HomePage from './HomePage.js'
import ProjectPage, { loader as projectPageLoader } from './ProjectPage.js'
import ProjectTagPage, { loader as projectTagPageLoader } from './ProjectTagPage.js'
import AboutPage from './AboutPage.js'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/projects/:projectTitle",
        element: <ProjectPage />,
        loader: projectPageLoader,
      },
      {
        path: "/projects",
        element: <ProjectTagPage />,
        loader: projectTagPageLoader,
      },
      {
        path: "/about",
        element: <AboutPage />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
