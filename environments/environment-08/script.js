"use strict";

window.addEventListener("load", start);

let playlist = [];

async function start() {
    await getData();
    showPlaylist();
}


async function getData() {
    let response = await fetch("./playlist.json");
    let data = await response.json();
    for (const key in data) {
        playlist.push(data[key]);
    }
}

function showPlaylist() {
    document.querySelector("#songlist").innerHTML = "";
    for (const key in playlist) {
        let HTMLelement = `
        <li>${playlist[key].artist}: ${playlist[key].title} (${playlist[key].duration}) <button>✖</button></li>
        `;
        document.querySelector("#songlist").insertAdjacentHTML("beforeend", HTMLelement);
        document.querySelector("#songlist :last-child button").addEventListener("click", () => deleteSong(key));
    }
}

function deleteSong(key) {
    playlist.splice(key, 1);
    showPlaylist();
}