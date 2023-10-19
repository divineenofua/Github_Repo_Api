import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet} from 'react-router-dom'
import App from './App'
import Home from './Home'
import RepoDetails from './Repodetails'
import ErrorPage from './Errorpage'
import AppOutlet from './Appoutlet'
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
    <Route path="/repodetails" element={<AppOutlet />} >
    <Route path=":id" element={<RepoDetails />} />
    </Route>
    </>  
  )
)

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
