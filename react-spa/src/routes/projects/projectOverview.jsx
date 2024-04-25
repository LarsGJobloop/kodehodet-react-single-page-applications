import { Link, Outlet } from "react-router-dom"

export function ProjectOverview() {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="projectId">Project 1</Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      <main>
        <Outlet />
      </main>
    </>
  )
}
