export default function ListeTaches() {
  return (
    <ul className="liste-taches">
      <li className="tache terminee">
        <span className="titre">Comprendre les composants</span>
      </li>

      <li className="tache">
        <span className="titre">Apprendre les props en React</span>
      </li>

      <li className="tache">
        <span className="titre">Comprendre le hook useState</span>
      </li>
    </ul>
  );
}
