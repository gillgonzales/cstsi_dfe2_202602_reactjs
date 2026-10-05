import { Link, useParams } from 'react-router';

export default function Ola() {
  let { name } = useParams();

  return <div>Olá {name || 'Mundo'} !!!<br />
      {/* <a href="/">Voltar(a)</a><br/> */}
      <Link to="/">Voltar(Link)</Link>
    </div>;
}
