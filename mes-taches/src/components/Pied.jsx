export default function Pied() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>
                TP React - {year} / {year+1} 
            </p>
        </footer>
    )
}