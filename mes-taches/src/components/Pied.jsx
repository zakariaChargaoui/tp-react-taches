export default function Pied({ auteur }) {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>
                TP React - réalisé par {auteur} - {year} / {year+1} 
            </p>
        </footer>
    )
}