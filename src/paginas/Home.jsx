
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Bienvenido</h1>

      <p>Descripción</p>

      <ul>
        <li>
          <Link to='/projects/'> Proyectos</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
