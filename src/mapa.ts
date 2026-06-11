import {Map, tileLayer} from 'leaflet'
const Mymap = new Map('mi-mapa').setView([-18.4904468,-64.1084428], 15);
        tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Mymap);