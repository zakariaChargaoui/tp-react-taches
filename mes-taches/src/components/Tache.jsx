export default function Tache({ titre, terminee, id, onBasculer, onSupprimer }) {
  const classes = `tache ${terminee ? "terminee" : ""}`
  return (
    <li className={classes}>
      <input
        type="checkbox"
        checked={terminee}
        onChange={() => onBasculer(id)}
      />
      <span className="titre">{titre}</span>
      <button className="danger" onClick={() => onSupprimer(id)}>
        Supprimer
      </button>
    </li>
  )
}
