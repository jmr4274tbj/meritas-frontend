export class Etudiant {
    codePermanent = "";
    nom = "";
    prenom = "";
    actif: boolean = true;
}

export class Cours {
    sigle = "";
    nomMatiere = "";
}

export class Professeur {
    noEmploye = "";
    motDePasse = "";
    prenom = "";
    nom = "";
}

export class Groupe {
    numeroUnique: number;
    numero: number;
    annee: number;
    listeCodePermanent: [string];
    sigle: string;
    noEmploye: string;
    etudiants: [Etudiant];

    constructor(id: number, numero: number, annee: number, liste: [string], sigle: string, noEmploye: string, listeEtudiants: [Etudiant]){
        this.numeroUnique = id;
        this.numero = numero;
        this.annee = annee;
        this.listeCodePermanent = liste;
        this.sigle = sigle;
        this.noEmploye = noEmploye;
        this.etudiants = listeEtudiants;
    }
}

export enum Raison {
    attitude,
	note,
	presence,
	effort,
	amelioration
}

export class RaisonActif {
    raison: Raison;
	actif = false;
    constructor(ra: Raison, actif: boolean) {
        this.raison = ra;
        this.actif = actif;
    }
}

export class Meritas {
    numero: number;
	etape: number;
    etudiantCodePermanent: String ;
	numeroUniqueGroupe: number;
    raison: Raison ;
    constructor(no: number, etape: number, etudiantId: String, groupe: number, raison: Raison) {
        this.numero = no;
        this.etape = etape;
        this.etudiantCodePermanent = etudiantId;
        this.numeroUniqueGroupe = groupe;
        this.raison = raison;
    }
}

export class Utilisateur {
    noEmploye: string;
    motDePasse: string;
    role: string;
    constructor(no: string, mdp: string, role: string) {
        this.noEmploye = no;
        this.motDePasse = mdp;
        this.role = role;
    }
} 