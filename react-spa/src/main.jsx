import React from 'react'
import ReactDOM from 'react-dom/client'
import {HomePage} from './routes/homePage'
import './index.css'
import { AboutPage } from './routes/about/aboutPage'
import {ContactPage} from './routes/contact/contactPage'
import {ProjectOverview} from './routes/projects/projectOverview'
import {ProjectDetails} from './routes/projects/projectId/projectDetails'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/projects",
    element: <ProjectOverview />
  },
  {
    path: "/projects/projectId",
    element: <ProjectDetails />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
