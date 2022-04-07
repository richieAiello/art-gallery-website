// Implements a map from leaflet.js

const map = L.map('map').setView([41.481320298128196, -71.31035694851494], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        zoom: 18,
        id: 'mapbox/dark-v10',  
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmljaGFpZWxsbzE3IiwiYSI6ImNsMG1pb2tiMjBxODczam8waWZ1ZGZ0dGEifQ.p3TioGR-2e5YJje17qFpdw'
    }).addTo(map);
    
const myIcon = L.icon({
    iconUrl: './assets/icon-location.svg',
    iconAnchor: [35, 85]
});    

L.marker([41.481320298128196, -71.31035694851494], {
    icon: myIcon
}).addTo(map);