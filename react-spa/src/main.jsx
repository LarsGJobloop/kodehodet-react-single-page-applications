import React from 'react'
import ReactDOM from 'react-dom/client'
import {HomePage} from './routes/homePage'
import './index.css'
import { AboutPage } from './routes/about/aboutPage'
import {ContactPage} from './routes/contact/contactPage'
import {ProjectOverview} from './routes/projects/projectOverview'
import {ProjectDetails} from './routes/projects/projectId/projectDetails'
import {ProjectNotFound} from './routes/projects/projectId/projectNotFound'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { LayoutRoot } from './routes/layoutRoot'
import { DefaultProjectDetails } from './routes/projects/projectId/defaultProjectDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
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
        element: <ProjectOverview />,
        children: [
          {
            index: true,
            element: <DefaultProjectDetails />
          },
          {
            path: "/projects/:projectId",
            errorElement: <ProjectNotFound />,
            element: <ProjectDetails />
          },
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
