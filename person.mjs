import dayjs from "dayjs";

const person = {
    nom: "Hugo",
    prenom: "Viktor",
    dateDeNaissance: "1910-01-01", // Exemple de date de naissance très ancienne
    pouvoir: "memorie"
};


console.log("--- Informations de la personne ---");
console.log(`Nom : ${person.nom}`);
console.log(`Prénom : ${person.prenom}`);
console.log(`Date de naissance : ${person.dateDeNaissance}`);
console.log(`Pouvoir : ${person.pouvoir}`);




const dateDeNaissance = dayjs(person.dateDeNaissance);


const ageEnAnnees = dayjs().diff(dateDeNaissance, 'year');


console.log(`Date de naissance : ${dateDeNaissance.format("DD MMMM YYYY")}`);
console.log(`Âge : ${ageEnAnnees} ans`);

if(ageEnAnnees>100){
    console.log(person.prenom +" "+ person.nom +" est immortelle");
}
else {
    console.log(person.nom +" est mortelle");

}





