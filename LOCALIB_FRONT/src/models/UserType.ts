import uuid from "react-uuid";
export default class UserType {
    id!:string;
    public static IdUser = 0;
    nom:string;
    prenom:string;
    dateNaissance:string;
    email:string;
    telephone:number;

    constructor(nom: string, prenom: string, dateNaissance: string, email: string, telephone: number) {
        //this.id = uuid();
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.email = email;
        this.telephone = telephone;
    }
}