import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './containers/header.js'
import Footer from './containers/footer.js'
import Resource from './pages/resource.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: '/resource',
    element: <Resource />,
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
