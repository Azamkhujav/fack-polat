import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './containers/header.js'
import Footer from './containers/footer.js'
import Resource from './pages/resource.js'
import About from './pages/about.js'
import Commerical from './pages/coomerical.js'
import Questions from './pages/questions.js'
import Members from './pages/members.js'
import Career from './pages/career'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: '/resource',
    element: <Resource />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/commerical',
    element: <Commerical />,
  },
  {
    path: '/questions',
    element: <Questions />,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path:"/career",
    element:<Career />
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
