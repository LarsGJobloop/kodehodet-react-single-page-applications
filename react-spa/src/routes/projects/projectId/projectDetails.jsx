import {useParams} from 'react-router-dom'
import { projects } from './project'

export function ProjectDetails() {
  const parameters = useParams()
  const project = projects[parameters.projectId]
  if (!project) {
    throw new Error(`Project not found! ProjectID: ${parameters.projectId}`)
  }

  return (
    <main>
      <header>
        <h1>{project.name}</h1>
      </header>

      <section>
        <img src={project.screenshot} alt={`Image of project ${project.name}`} />
        <p>{project.details}</p>
      </section>

      <footer>
        <a href={project.repository}>GitHub</a>
      </footer>
    </main>
  )
}
