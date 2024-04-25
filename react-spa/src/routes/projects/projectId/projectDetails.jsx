import {useParams} from 'react-router-dom'
import { projects } from './project'
import style from './projectDetails.module.css'

export function ProjectDetails() {
  const parameters = useParams()
  const project = projects[parameters.projectId]
  if (!project) {
    throw new Error(`Project not found! ProjectID: ${parameters.projectId}`)
  }

  return (
    <main className={style["layout"]}>
      <header>
        <h1 className='text-center capitalize'>{project.name}</h1>
      </header>

      <div className='grow'>
        <section className={["bg-primary", style["hero"]].join(" ")}>
          <img src={project.screenshot} alt={`Image of project ${project.name}`} />
        </section>

        <section className={["py-lg", style["description"]].join(" ")}>
          <div className='mx-auto'>
            <p>{project.details}</p>
          </div>
        </section>
      </div>

      <footer className='text-center'>
        <a href={project.repository}>GitHub</a>
      </footer>
    </main>
  )
}
