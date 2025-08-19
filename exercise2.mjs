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
Exercise_2
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

// add 2 songs from your friend
