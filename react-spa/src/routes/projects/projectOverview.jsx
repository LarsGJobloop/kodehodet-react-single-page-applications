import { Link, Outlet } from "react-router-dom"
import { projects } from './projectId/project'

export function ProjectOverview() {
  const projectList = Object.entries(projects)

  return (
    <>
      <aside>
        <nav>
          <ul>
            {
              projectList.map(([projectId, {name}]) => {
                return (
                  <li key={projectId}>
                    <Link to={projectId}>{name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </aside>
      
      <main>
        <Outlet />
      </main>
    </>
  )
}
