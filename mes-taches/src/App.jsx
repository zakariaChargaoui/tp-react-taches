import { useEffect, useState } from 'react'
import Carte from "./components/Carte.jsx";
import Compteur from "./components/Compteur.jsx";
import Entete from "./components/Entete.jsx";
import Filtres from "./components/Filtres.jsx";
import FormulaireAjout from "./components/FormulaireAjout.jsx";
import Horloge from "./components/Horloge.jsx";
import ListeTaches from "./components/ListeTaches.jsx";
import Pied from "./components/Pied.jsx";
import Statistiques from "./components/Statistiques.jsx";

function App() {
  const [taches, setTaches] = useState([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(null)
  const [filtre, setFiltre] = useState('toutes')

  function ajouterTache(titre) {
    setTaches([...taches, { id: Date.now(), titre, terminee: false }])
  }

  function basculerTache(id) {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
      ),
    )
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id))
  }

  let tachesVisibles = taches
  if (filtre === 'actives') {
    tachesVisibles = taches.filter((tache) => !tache.terminee)
  } else if (filtre === 'terminees') {
    tachesVisibles = taches.filter((tache) => tache.terminee)
  }

  const restantes = taches.filter((tache) => !tache.terminee).length

  useEffect(() => {
    document.title = `(${restantes}) Mes tâches`
  }, [restantes])

  useEffect(() => {
    let annule = false

    fetch('/taches.json')
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`)
        return reponse.json()
      })
      .then((donnees) => {
        if (!annule) setTaches(donnees)
      })
      .catch((err) => {
        if (!annule) setErreur(err.message)
      })
      .finally(() => {
        if (!annule) setChargement(false)
      })

    return () => {
      annule = true
    }
  }, [])

  const maListe = chargement ? (
    <p className="vide">Chargement des tâches…</p>
  ) : erreur ? (
    <p className="erreur">{erreur}</p>
  ) : (
    <>
      <Filtres filtre={filtre} onChanger={setFiltre} />
      <ListeTaches
        taches={tachesVisibles}
        onBasculer={basculerTache}
        onSupprimer={supprimerTache}
      />
    </>
  )

  return (
    <div className="app">
      <Entete titre="Mes tâches" sousTitre="Mon premier projet React" />
      <Carte titre="Heure actuelle">
        <Horloge />
      </Carte>
      <Carte titre="Compteur">
        <Compteur />
      </Carte>
      <Carte titre="Nouvelle tâche">
        <FormulaireAjout onAjouter={ajouterTache} />
      </Carte>
      <Carte titre="Ma liste">
        {maListe}
      </Carte>
      <Carte titre="Statistiques">
        <Statistiques taches={taches} />
      </Carte>
      <Pied auteur="ZAKARIA CHARGAOUI" />
    </div>
  );
}

export default App;
