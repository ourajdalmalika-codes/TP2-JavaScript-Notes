console.log("TP2:gestion des notes");

const etudiants = [
 { id: 1, nom: 'Amine', note: 16 },
 { id: 2, nom: 'Youssef', note: 8 },
 { id: 3, nom: 'Salma', note: 14 },
 { id: 4, nom: 'Omar', note: 12 },
 ];
 console.log(etudiants);
 console.log('1ere :',etudiants[0].nom);
console.log('Effectif:', etudiants.length);
function noteValide(note){
    return Number.isFinite(note)&& 
        note>=0 && note<=20;
}
console.log(noteValide(16));
console.log(noteValide(26));
function moyenne(notes){
    if (notes.length ===0)
        return null;
    const total=notes.reduce((somme,note) => somme+note ,0)
         return total/ notes.length; 
}
const notes=etudiants.map((e)=> e.note);
console.log('moyenne :',moyenne(notes));
const admis=etudiants.filter(
(e)=> e.note>= 10
);
console.log('admis:',admis.length);
const resultats = etudiants.map((e) => ({
    nom: e.nom,
    note: e.note,
    resultat: e.note>=10 ?'Admis' : 'Ajourne'
}));

console.log('Resultat final :', resultats);