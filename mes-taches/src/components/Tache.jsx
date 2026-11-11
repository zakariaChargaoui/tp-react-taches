export default function Tache({titre , terminee}) {
    const classes = `tache ${terminee ? "terminee" : ""}`
    return (
        <li className={classes}>
            <span className="titre">{titre}</span>
        </li>
    )
}