import { Link, Outlet } from "react-router-dom"

export function ProjectOverview() {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="0001">Project 1</Link>
            </li>
            <li>
              <Link to="0002">Project 2</Link>
            </li>
            <li>
              <Link to="0003">Project 3</Link>
            </li>
            <li>
              <Link to="0004">Project 4</Link>
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
