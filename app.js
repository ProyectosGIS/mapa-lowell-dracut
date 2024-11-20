// app.js

// Crear el mapa y centrarlo en Lowell y Dracut
var map = L.map('map').setView([42.6334, -71.3162], 12);  // Coordenadas de Lowell, MA

// Agregar un "tile layer" base con OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador en Lowell
var marker = L.marker([42.6334, -71.3162]).addTo(map);
marker.bindPopup("<b>Lowell, MA</b>").openPopup();
