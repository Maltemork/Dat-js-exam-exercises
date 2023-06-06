"use strict";

window.addEventListener("load", start);

let playlist = [
    { "artist": "Taylor Swift", "title": "Blank space", "duration": "4:33" },
    { "artist": "Beastie Boys", "title": "Sabotage", "duration": "3:02" },
    { "artist": "Skrillex", "title": "Bangarang", "duration": "3:35" },
    { "artist": "Wolfgang Amadeus Mozart", "title": "Eine kleine Nachtmusik", "duration": "5:45" },
    { "artist": "Coldplay", "title": "Yellow", "duration": "4:27" },
    { "artist": "Metallica", "title": "Enter Sandman", "duration": "5:32" },
];

function start() {
   showSongs();
}

function showSongs() {
    document.querySelector("#songlist").innerHTML = "";
    for (const key in playlist) {
        let HTMLelement = `
        <li>${playlist[key].artist}: ${playlist[key].title} (${playlist[key].duration}) <button>⬆</button></li>
        `;
        document.querySelector("#songlist").insertAdjacentHTML("beforeend", HTMLelement);
        document.querySelector("#songlist :last-child button").addEventListener("click", () => upvoteSong(key))
    }

}

function upvoteSong(key) {
    const tempHolder = playlist[key];
    if (key > 0) {
    playlist[key] = playlist[key - 1];
    playlist[key - 1] = tempHolder;
    showSongs();
    }
    
}