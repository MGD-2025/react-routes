import projects from "../data/projects";


function Projects() {
  return (
    <>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li>
            <h2>{project.id}</h2>
            <h3>{project.name}</h3>
            <img
              src={project.image}
              alt={project.name}
            />
            <p>{project.description}</p>
            <a href={project.url} target="_blank"> Ver</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;