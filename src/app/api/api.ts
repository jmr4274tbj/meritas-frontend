import axios from "axios"
import { Cours, Etudiant, Groupe, Meritas, Professeur, RaisonActif, Utilisateur } from "../model/model";
export class api {

    constructor() {
        axios.defaults.baseURL = "http://meritas.us-east-2.elasticbeanstalk.com/";
        //axios.defaults.baseURL = "http://localhost:8081";
        //axios.defaults.baseURL = "https://meritas-app.herokuapp.com";
    }

    async obtenirEtudiants(): Promise<Array<Etudiant>> {
        const reponse = await axios.get<Array<Etudiant>>("/etudiants");
        return reponse.data;
    }

    async creerEtudiants(listeEtudiant: Array<Etudiant>): Promise<Array<Etudiant>> {
        const reponse = await axios.post<Array<Etudiant>>("/etudiants", listeEtudiant);
        return reponse.data;
    }

    async obtenirProfesseurs(): Promise<Array<Professeur>> {
        const reponse = await axios.get<Array<Professeur>>("/professeurs");
        return reponse.data;
    }

    async creerProfesseurs(listeProfesseur: Array<Professeur>): Promise<Array<Professeur>> {
        const reponse = await axios.post<Array<Professeur>>("/professeurs", listeProfesseur);
        return reponse.data;
    }

    async obtenirCours(): Promise<Array<Cours>> {
        const reponse = await axios.get<Array<Cours>>("/cours");
        return reponse.data;
    }

    async creerCours(listeCours: Array<Cours>): Promise<Array<Cours>> {
        const reponse = await axios.post<Array<Cours>>("/cours", listeCours);
        return reponse.data;
    }

    async obtenirGroupes(): Promise<Array<Groupe>> {
        const reponse = await axios.get<Array<Groupe>>("/groupes");
        return reponse.data;
    }

    async creerGroupes(listeGroupe: Array<Groupe>): Promise<Array<Groupe>> {
        const reponse = await axios.post<Array<Groupe>>("/groupes", listeGroupe);
        return reponse.data;
    }

    async trouverGroupesParProfesseur(noEmploye: string): Promise<Array<Groupe>> {
        const reponse = await axios.get<Array<Groupe>>("/professeurs/" + noEmploye + "/groupes");
        return reponse.data;
    }

    async validerUtilisateur(utilisateur: Utilisateur): Promise<Utilisateur> {
        const reponse = await axios.post<Utilisateur>("/utilisateurs-valider", utilisateur);
        return reponse.data;
    }

    async modifierUtilisateur(utilisateur: Utilisateur): Promise<Utilisateur> {
        const reponse = await axios.put<Utilisateur>("/utilisateurs", utilisateur);
        return reponse.data;
    }

    async ajouterEtudiantDansGroupes(codePermanent: string, listeGroupe: [number]): Promise<number> {
        const reponse = await axios.post("/groupes-ajouter-etudiant/" + codePermanent, listeGroupe);
        return reponse.status;
    }
    
    async obtenirRaisons(): Promise<Array<RaisonActif>> {
        const reponse = await axios.get<Array<RaisonActif>>("/raison-actif");
        return reponse.data;
    }

    async modifierRaisonActif(raisonActif: RaisonActif): Promise<RaisonActif> {
        const reponse = await axios.put<RaisonActif>("/raison-actif", raisonActif);
        return reponse.data;
    }

    async obtenirMeritas(): Promise<Array<Meritas>> {
        const reponse = await axios.get<Array<Meritas>>("/meritas");
        return reponse.data;
    }

    async creerMeritas(meritas: Meritas): Promise<Meritas> {
        const reponse = await axios.post<Meritas>("/meritas", meritas);
        return reponse.data;
    }

    async changerEtudiantActifEnInactif(etudiant: Etudiant): Promise<Etudiant> {
        const reponse = await axios.put<Etudiant>("/etudiants", etudiant);
        return reponse.data;
    }

    

}