"use strict";

window.addEventListener("load", start);

let playlist = [
    { "artist": "Taylor Swift", "title": "Blank space", "duration": "4:33" },
  { "artist": "Beastie Boys", "title": "Sabotage", "duration": "3:02" },
  { "artist": "Skrillex", "title": "Bangarang", "duration": "3:35" },
  { "artist": "Wolfgang Amadeus Mozart", "title": "Eine kleine Nachtmusik", "duration": "5:45" },
  { "artist": "Coldplay", "title": "Yellow", "duration": "4:27" },
  { "artist": "Metallica", "title": "Enter Sandman", "duration": "5:32" }
];

function start() {
    document.querySelector("#add-song-form").addEventListener("submit", addSong);
    document.querySelector("#sort-songs-form").addEventListener("change", sortSongs);
    showSongs();
}

function addSong(event) {
    event.preventDefault();

    let artistParm = document.querySelector("#name").value;
    let titleParm = document.querySelector("#title").value;
    let durationParm = document.querySelector("#duration").value;

    let newSong = {
        artist: artistParm,
        title: titleParm,
        duration: durationParm
    }

    playlist.push(newSong);
    document.querySelector("#add-song-form").reset();
    showSongs();
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const key in playlist) {
        let HTMLelement = `
        <li>${playlist[key].artist}: ${playlist[key].title} (${playlist[key].duration})</li>
        `;
        document.querySelector("#songlist").insertAdjacentHTML("beforeend", HTMLelement);
    }
}

function sortSongs() {
    console.log("noget");

    if (document.querySelector("#sort-artist").checked === true) {
        playlist.sort((a, b) => {
            let artistA = a.artist.toLowerCase();
            let artistB = b.artist.toLowerCase();
    
            if (artistA < artistB) return -1;
            return 1;
    });
        showSongs();
    } else if (document.querySelector("#sort-title").checked) {
        playlist.sort((a, b) => {
            let titleA = a.title.toLowerCase();
            let titleB = b.title.toLowerCase();
    
            if (titleA < titleB) return -1;
            return 1;
        });
        showSongs();
    }

}