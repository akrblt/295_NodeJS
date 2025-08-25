/*
Exercise_1
 */
let music=125;
console.log("Votre playlist contient " +music +" musics");
music=music-15;
console.log("Votre playlist contient " +music +" musics");
music+=10;
console.log("Votre playlist contient " +music +" musics");
console.log("Maintenant , j'ai " +music +" morceaux au total dans ma playlist");

/*
Exercise_2 Gestion de music
 */

let playlist=["red","king","bla bla"];
console.log("Number of songs : "+playlist.length);
// function to display all songs
function showPlaylist(){
    console.log("Showing playlist");
    for(let i=0;i<playlist.length;i++){
        console.log(i+1+":", playlist[i]);
    }
}
showPlaylist();

// add 2 songs from your friend & ajouter les chantes dans la liste via votre ami
playlist[3]="Nuit";
console.log(playlist[3]);
playlist[4]="Matin";
showPlaylist()
playlist.pop();
showPlaylist();
playlist.splice(1,1);
showPlaylist();

const indexDelete=6;
if (indexDelete < playlist.length){
    playlist.splice(indexDelete, 1);
    console.log(" Le morceau à l'index ${indexDelete+1} a été supprimé.  ");
} else {
    console.log(` Attention : Impossible de supprimer le ${indexDelete+1}èmè morceau n'exsiste pas`);
}
console.log("\n Morceaux disponibles");
showPlaylist();

// Exercise 3 Boucle
