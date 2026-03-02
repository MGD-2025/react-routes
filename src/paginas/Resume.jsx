import { studies, experiences } from "../data/resume";

function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <h2>Experiencia laboral</h2>
      <ul>
        {experiences.map((exp) => (
          <li>
            <h2>{exp.id}</h2>
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <span>{exp.date}</span>
          </li>
        ))}
      </ul>

      <h2>Educación</h2>
      <ul>
        {studies.map((study) => (
          <li >
            <h2>{study.id}</h2>
            <h3>{study.title}</h3>
            <p>{study.institution}</p>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Resume;