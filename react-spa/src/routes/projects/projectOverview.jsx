import { NavLink, Outlet } from "react-router-dom"
import { projects } from './projectId/project'
import style from './projectOverview.module.css'

export function ProjectOverview() {
  const projectList = Object.entries(projects)

  return (
    <div className={style["layout"]}>
      <aside>
        <nav className="px-md my-lg">
          <ul>
            {
              projectList.map(([projectId, {name}]) => {
                return (
                  <li key={projectId} className="hover-scale">
                    <NavLink to={projectId} className={({isActive}) => [isActive && "underline bold", "capitalize text-xs"].join(" ")}>{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </aside>
      
      <div className="p-sm">
        <Outlet />
      </div>
    </div>
  )
}
