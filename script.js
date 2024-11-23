// Crear el mapa y establecer la vista inicial
const map = L.map('map', {
  center: [42.657, -71.324], // Coordenadas de Dracut y Lowell
  zoom: 14
});

// Capa base: Mapa de calles
const streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map); // Añadir directamente al cargar el mapa

// Capa base: Mapa satelital
const satellite = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenTopoMap contributors'
});

// Capa temática: Puntos de interés
const pointsOfInterest = L.geoJSON(null, {
  style: { color: 'blue' },
  onEachFeature: (feature, layer) => {
      layer.bindPopup(`Lugar: ${feature.properties.name}`);
  }
});

// Cargar datos GeoJSON para Puntos de Interés
fetch('data/points_of_interest.geojson')
  .then(response => response.json())
  .then(data => pointsOfInterest.addData(data));

// Control de capas
const baseMaps = {
  "Mapa de Calles": streets,
  "Mapa Satelital": satellite
};

const overlayMaps = {
  "Puntos de Interés": pointsOfInterest
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
