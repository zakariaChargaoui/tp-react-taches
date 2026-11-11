const ANNEE = new Date().getFullYear()

export default function Pied({ auteur }) {
    return (
        <footer>
            <p>
                TP React - réalisé par {auteur} - {ANNEE}
            </p>
        </footer>
    )
}
