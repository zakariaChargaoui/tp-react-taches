import Tache from "./Tache";
export default function ListeTaches({ taches, onBasculer, onSupprimer }) {
  if (taches.length == 0) {
    return <p className="vide">Aucune tâche à afficher.</p>;
  }
  return (
    <ul className="liste-taches">
      {taches.map((tach) => (
        <Tache
          key={tach.id}
          id={tach.id}
          titre={tach.titre}
          terminee={tach.terminee}
          onBasculer={onBasculer}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  );
}
